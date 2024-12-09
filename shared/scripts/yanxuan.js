const ContainerClassName = 'ContentItem';
const YanXuanClassName = 'KfeCollection-AnswerTopCard-Container';

const hideYanXuanAnswers = () => {
  document.styleSheets[0]
    .insertRule(`.${ContainerClassName}:has(.${YanXuanClassName}) { display: none !important; }`);
}

hideYanXuanAnswers();
