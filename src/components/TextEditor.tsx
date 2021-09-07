import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { Button, Input, Radio } from 'antd';
//import { Input } from 'antd';

//const { TextArea } = Input;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faBackward, faForward, faArrowDown, faArrowUp, faDotCircle, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
//import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { RadioChangeEvent } from 'antd/lib/radio';

export default function TextEditor() {
  const [content, setContent] = useState('');
  const [marker, setMarker] = useState('');
  const [affix, setAffix] = useState('');
  const [splitter, setSplitter] = useState('');
  const [splitterPosition, setSplitterPosition] = useState('before');

  useEffect(() => {}, []);

  function onContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function onRemoveDuplicateLines(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    setContent(_.uniq(contentArray).join('\n'));
  }

  function onRemoveEmptyLines(event: React.MouseEvent) {
    const contentArray = content.replace(/\r/g, '').split('\n');
    const contentOutArray = _.remove(contentArray, (line: string) => !_.isEmpty(_.trim(line)));
    setContent(contentOutArray.join('\n'));
  }

  function onRemoveContainingMarker(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    const contentOutArray = _.remove(contentArray, (line: string) => !line.includes(marker));
    setContent(contentOutArray.join('\n'));
  }
  function onRemoveNotContainingMarker(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    const contentOutArray = _.remove(contentArray, (line: string) => line.includes(marker));
    setContent(contentOutArray.join('\n'));
  }
  function onMarkerChange(event: ChangeEvent<HTMLInputElement>) {
    setMarker(event.target.value);
  }

  function onPrefixLines(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    var contentArrayLength = contentArray.length;
    for (var x = 0; x < contentArrayLength; x++) {
      contentArray[x] = affix + contentArray[x];
    }

    setContent(contentArray.join('\n'));
  }
  function onSuffixLines(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    var contentArrayLength = contentArray.length;
    for (var x = 0; x < contentArrayLength; x++) {
      contentArray[x] = contentArray[x] + affix;
    }

    setContent(contentArray.join('\n'));
  }
  function onAffixChange(event: ChangeEvent<HTMLInputElement>) {
    setAffix(event.target.value);
  }

  function onSortAscending(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    const contentOutArray = _.sortBy(contentArray, (line: string) => line);
    setContent(contentOutArray.join('\n'));
  }
  function onSortDescending(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    const contentOutArray = _.reverse(_.sortBy(contentArray, (line: string) => line));
    setContent(contentOutArray.join('\n'));
  }

  function onCaseLower(event: React.MouseEvent) {
    setContent(content.toLowerCase());
  }
  function onCaseUpper(event: React.MouseEvent) {
    setContent(content.toUpperCase());
  }
  function onCaseTitle(event: React.MouseEvent) {
    setContent(content.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()));
  }
  function onCaseSentence(event: React.MouseEvent) {
    setContent(content.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()));
  }

  function onLineBreaksRemove(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    setContent(_.join(contentArray, ''));
  }
  function onLineBreaksAdd(event: React.MouseEvent) {
    setContent(content.toUpperCase());
    const splitted = _.split(content, splitter);
    console.log('splitted: ', splitted);
    setContent(_.join(splitted, splitterPosition === 'before' ? '\n' + splitter : splitter + '\n'));
  }

  function onBeaconPositionChange(event: RadioChangeEvent) {
    setSplitterPosition(event.target.value);
  }
  function onBeaconChange(event: ChangeEvent<HTMLInputElement>) {
    setSplitter(event.target.value);
  }

  function onGenerateData(event: React.MouseEvent) {
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text').then((response) => {
      setContent(response.data);
    });
  }

  return (
    <Fragment>
      <div className="flex h-full">
        <div className="flex-grow bg-red-500 h-full">
          <textarea
            className="resize-none w-full h-full border border-gray-200 outline-none focus:border-blue-400"
            placeholder="Enter a value to manipulate"
            value={content}
            onChange={onContentChange}
          ></textarea>
        </div>
        <aside className="flex-shrink w-4/12 focus:outline-none bg-gray-100 px-2 py-1 border-r border-gray-200">
          <div className="flex flex-col space-y-3">
            <div>
              <h3>Remove Empty Or Duplicate Lines</h3>
              <div className="flex space-x-1">
                <Button type="primary" onClick={onRemoveDuplicateLines} className="flex-auto">
                  <FontAwesomeIcon icon={faEraser} className="text-white" /> Remove Duplicate Lines
                </Button>
                <Button type="primary" onClick={onRemoveEmptyLines} className="flex-auto">
                  <FontAwesomeIcon icon={faEraser} className="text-white" /> Remove Empty Lines
                </Button>
              </div>
            </div>

            <div>
              <h3>Remove Lines</h3>
              <div className="flex space-x-1">
                <Input placeholder="Keyword" value={marker} onChange={onMarkerChange} className="flex-grow" />
                <Button type="primary" onClick={onRemoveContainingMarker} className="flex-auto">
                  <FontAwesomeIcon icon={faEraser} className="text-white" /> Containing
                </Button>
                <Button type="primary" onClick={onRemoveNotContainingMarker} className="flex-auto">
                  <FontAwesomeIcon icon={faEraser} className="text-white" /> Not Containing
                </Button>
              </div>
            </div>

            <div>
              <h3>Prefix / Suffix Lines</h3>
              <div className="flex space-x-1">
                <Input placeholder="Keyword" value={affix} onChange={onAffixChange} className="flex-grow" />
                <Button type="primary" onClick={onPrefixLines} className="flex-auto">
                  <FontAwesomeIcon icon={faBackward} className="text-white" /> Prefix
                </Button>
                <Button type="primary" onClick={onSuffixLines} className="flex-auto">
                  <FontAwesomeIcon icon={faForward} className="text-white" /> Suffix
                </Button>
              </div>
            </div>

            <div>
              <h3>Sort Lines</h3>
              <div className="flex space-x-1">
                <Button type="primary" onClick={onSortAscending} className="flex-auto">
                  <FontAwesomeIcon icon={faArrowDown} className="text-white" /> Sort Ascending
                </Button>
                <Button type="primary" onClick={onSortDescending} className="flex-auto">
                  <FontAwesomeIcon icon={faArrowUp} className="text-white" /> Sort Descending
                </Button>
              </div>
            </div>

            <div>
              <h3>Change Letter Case</h3>
              <div className="flex space-x-1">
                <Button type="primary" onClick={onCaseLower} className="flex-auto">
                  <FontAwesomeIcon icon={faDotCircle} className="text-white" /> Lower
                </Button>
                <Button type="primary" onClick={onCaseUpper} className="flex-auto">
                  <FontAwesomeIcon icon={faDotCircle} className="text-white" /> Upper
                </Button>
                <Button type="primary" onClick={onCaseTitle} className="flex-auto">
                  <FontAwesomeIcon icon={faDotCircle} className="text-white" /> Title
                </Button>
                <Button type="primary" onClick={onCaseSentence} className="flex-auto">
                  <FontAwesomeIcon icon={faDotCircle} className="text-white" /> Sentence
                </Button>
              </div>
            </div>

            <div>
              <h3>Add / Remove Line Breaks</h3>
              <div className="flex space-x-1">
                <Button type="primary" onClick={onLineBreaksRemove} className="flex-initial">
                  <FontAwesomeIcon icon={faDotCircle} className="text-white" /> Join Lines
                </Button>
                <Radio.Group defaultValue={splitterPosition} onChange={onBeaconPositionChange} buttonStyle="solid" className="flex-grow">
                  <Radio.Button value="before" className="flex-grow">
                    <FontAwesomeIcon icon={faForward} /> Before
                  </Radio.Button>
                  <Radio.Button value="after" className="flex-grow">
                    <FontAwesomeIcon icon={faForward} /> After
                  </Radio.Button>
                </Radio.Group>
                <Input placeholder="Keyword" value={splitter} onChange={onBeaconChange} className="w-36 flex-shrink" />
                <Button type="primary" onClick={onLineBreaksAdd} className="flex-auto">
                  <FontAwesomeIcon icon={faDotCircle} className="text-white" /> Break Lines
                </Button>
              </div>
            </div>

            <div>
              <h3>Generate Lines</h3>
              <div className="flex space-x-1">
                <Button type="primary" onClick={onGenerateData} className="flex-auto">
                  <FontAwesomeIcon icon={faWaveSquare} className="text-white" /> Generate Data
                </Button>
              </div>
            </div>
            <div className="font-bold bg-gray-400 rounded text-white p-1">Content length: {content.length}</div>
          </div>
        </aside>
      </div>
    </Fragment>
  );
}
