import React from 'react';
import '../../../styles/main.scss';
import Paddable from '../../Structures/Paddable/Paddable';

export interface ITextAreaProps {
  defaultValue?: string;
  placeholder?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

const TextArea = (props: ITextAreaProps) => {
  return (
    <Paddable top={props.pt} right={props.pr} bottom={props.pb} left={props.pl}>
      <textarea className="textArea"></textarea>
    </Paddable>
  );
};

export default TextArea;
