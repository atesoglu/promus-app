import React, { ChangeEvent, Fragment, useState } from 'react';
import { Button } from 'antd';
//import { Input } from 'antd';

//const { TextArea } = Input;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

export default function TextEditor() {
  const [content, setContent] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }
  function onRemoveDuplicateLines(event: React.MouseEvent) {
    console.log(content);
  }
  function onRemoveEmptyLines(event: React.MouseEvent) {
    var contentArray = content.replace(/\r/g, '').split('\n');
    var contentArrayLength = contentArray.length;
    var newContentArray = [];
    var newContentArrayLength = 0;
    var testRegex = new RegExp(/\S/);
    for (var x = 0; x < contentArrayLength; x++) {
      if (testRegex.test(contentArray[x])) {
        newContentArray[newContentArrayLength] = contentArray[x];
        newContentArrayLength++;
      }
    }
    setContent(newContentArray.join('\n'));
  }

  return (
    <Fragment>
      <div className="flex h-full">
        <div className="flex-grow bg-red-500 h-full">
          <textarea className="resize-none w-full h-full border border-gray-200 outline-none focus:border-blue-400" value={content} onChange={handleInputChange}></textarea>
        </div>
        <aside className="flex-shrink w-96 focus:outline-none bg-gray-100 px-2 py-1 border-r border-gray-200">
          <div className="flex flex-col space-y-1">
            <Button type="primary" onClick={onRemoveDuplicateLines}>
              <FontAwesomeIcon icon={faEraser} className="text-white" /> Remove Duplicate Lines
            </Button>
            <Button type="primary" onClick={onRemoveEmptyLines}>
              <FontAwesomeIcon icon={faEraser} className="text-white" /> Remove Empty Lines
            </Button>
          </div>
        </aside>
      </div>
    </Fragment>
  );
}
