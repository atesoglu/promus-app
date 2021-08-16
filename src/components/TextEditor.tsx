import React, { ChangeEvent, Fragment, useState } from 'react';
import { Button, Checkbox } from 'antd';
//import { Input } from 'antd';

//const { TextArea } = Input;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

export default function TextEditor() {
  const [content, setContent] = useState('');
  const [isRemoveDuplicateLinesCaseSensitive, setRemoveDuplicateLinesCaseSensitive] = useState(false);

  function onContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function onRemoveDuplicateLines(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    var contentArrayLength = contentArray.length;
    var hash: { [line: string]: string } = {};
    var hashKey = '';
    var contentOutArray = [];
    var contentOutArrayLength = 0;
    if (isRemoveDuplicateLinesCaseSensitive === true) {
      for (var i = 0; i < contentArrayLength; i++) {
        hashKey = contentArray[i];
        if (hash[hashKey] == null) {
          hash[hashKey] = '';
          contentOutArray[contentOutArrayLength] = hashKey;
          contentOutArrayLength++;
        }
      }
    } else {
      for (var j = 0; j < contentArrayLength; j++) {
        hashKey = contentArray[j];
        if (hash[hashKey.toLowerCase()] == null) {
          hash[hashKey.toLowerCase()] = '';
          contentOutArray[contentOutArrayLength] = hashKey;
          contentOutArrayLength++;
        }
      }
    }
    setContent(contentOutArray.join('\n'));
  }
  function onRemoveDuplicateLinesCaseSensitiveChange(event: CheckboxChangeEvent) {
    setRemoveDuplicateLinesCaseSensitive(event.target.checked);
  }

  function onRemoveEmptyLines(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    var contentArrayLength = contentArray.length;
    var contentOutArray = [];
    var contentOutArrayLength = 0;
    var testRegex = new RegExp(/\S/);
    for (var x = 0; x < contentArrayLength; x++) {
      if (testRegex.test(contentArray[x])) {
        contentOutArray[contentOutArrayLength] = contentArray[x];
        contentOutArrayLength++;
      }
    }
    setContent(contentOutArray.join('\n'));
  }

  return (
    <Fragment>
      <div className="flex h-full">
        <div className="flex-grow bg-red-500 h-full">
          <textarea className="resize-none w-full h-full border border-gray-200 outline-none focus:border-blue-400" value={content} onChange={onContentChange}></textarea>
        </div>
        <aside className="flex-shrink w-96 focus:outline-none bg-gray-100 px-2 py-1 border-r border-gray-200">
          <div className="flex flex-col space-y-3">
            <div className="flex">
              <Button type="primary" onClick={onRemoveDuplicateLines} className="flex-grow">
                <FontAwesomeIcon icon={faEraser} className="text-white" /> Remove Duplicate Lines
              </Button>

              <Checkbox checked={isRemoveDuplicateLinesCaseSensitive} onChange={onRemoveDuplicateLinesCaseSensitiveChange} className="flex-shrink pl-2 pt-2">
                Case-sensitive
              </Checkbox>
            </div>
            <Button type="primary" onClick={onRemoveEmptyLines}>
              <FontAwesomeIcon icon={faEraser} className="text-white" /> Remove Empty Lines
            </Button>
          </div>
        </aside>
      </div>
    </Fragment>
  );
}
