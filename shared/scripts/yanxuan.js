const YanXuanClassName = 'KfeCollection-AnswerTopCard-Container';

const hideYanXuanAnswers = () => {
  const yanXuanAnswers = document.getElementsByClassName(YanXuanClassName);

  if (!yanXuanAnswers || yanXuanAnswers.length === 0) {
    return;
  }

  for (let answer of yanXuanAnswers) {
    let list;
    let parent = answer.parentElement;

    while (parent) {
      if (/(List-item|TopstoryItem)/.test(parent.className)) {
        list = parent;
        break;
      }

      parent = parent.parentElement;
    }

    if (!list) {
      continue;
    }

    list.style.display = 'none';
  }
}

hideYanXuanAnswers();
