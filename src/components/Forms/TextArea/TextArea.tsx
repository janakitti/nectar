import React from 'react';
import '../../../styles/main.scss';

export interface ITextAreaProps {
  defaultValue?: string;
  placeholder?: string;
}

const TextArea = (props: ITextAreaProps) => {
  return <textarea className="textArea"></textarea>;
};

export default TextArea;
