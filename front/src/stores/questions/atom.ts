import { atom } from 'recoil';
import { Question } from '../../@types/question.type';

const questionsState = atom<Question[]>({
  key: 'questionsState',
  default: [
    {
      title: '질문1입니다.',
      desc: '설명1입니다.',
      type: 'text',
      required: false,
      option: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문2입니다.',
      desc: '설명2입니다.',
      type: 'textarea',
      required: false,
      option: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문3입니다.',
      desc: '설명3입니다.',
      type: 'select',
      required: false,
      option: {
        placeholder: '',
        item: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
  ],
});

export default questionsState;
