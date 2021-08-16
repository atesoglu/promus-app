import React, { ChangeEvent, Fragment, useState } from 'react';
import { Button } from 'antd';
//import { Input } from 'antd';

//const { TextArea } = Input;

export default function TextEditor() {
  const [content, setContent] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log('event: ', event);
  }
  function onRemoveDuplicateLines(event: React.MouseEvent) {
    console.log(content);
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
              Remove Duplicate Lines
            </Button>
            <Button type="primary">Remove Empty Lines</Button>
          </div>
        </aside>
      </div>
    </Fragment>
  );
}
