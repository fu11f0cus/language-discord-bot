const presentSimple = {
  name: "presentSimple",
  description:
    "Времена Present в английском языке используются для характеристики действий, происходящих в настоящем времени. К Present Simple мы обращаемся в тех ситуациях, когда хотим сообщить какую-то общую информацию о человеке (рассказать о его принадлежности к какому-то классу, профессии и т. п.). Например, «I am a student» (я студент). Также настоящее простое время необходимо для того, чтобы сообщить о действии, которое повторяется систематически. Например, «He cooks» (он готовит). В данном примере имеется в виду, что он в принципе умеет готовить еду, делает это постоянно, а не в какой-то конкретный отрезок времени. ",
  example: "The earth goes around the Sun - Земля вращается вокруг солнца, \nMessi scores a goal - Месси забивает гол",
};
const presentContinious = {
  name: "presentContinious",
  description:
    "Если действие происходит в момент речи, то мы используем Present Continuous , или настоящее длительное время. Эта временная конструкция строится с помощью вспомогательного глагола to be, который, в зависимости от лица и числа, принимает одну из трех форм. Для местоимения I (я) мы используем форму am. В третьем лице единственного числа (местоимения he, she, it) to be принимает форму is, а во множественном числе — are.",
  example:
    "I am looking at you - Я смотрю на тебя(в данный момент), \nHis english is getting better - Его английский становится лучше(действие в процессе)",
};
const pastSimple = {
  name: "pastSimple",
  description:
    "Past Simple (Простое прошедшее) Времена группы past характеризуют действия, совершенные в прошлом. Past Simple мы используем тогда, когда нужно сообщить о повторяющемся в прошлом действии. Для того, чтобы построить вопросительную или отрицательную форму, нам понадобится вспомогательный глагол did. При этом, основной глагол не будет изменяться. Понять, что перед вами Past Simple, можно также по таким словам-маркерам, как: \nyesterday, \nin 2008, \n15 years ago, \nlast week, \nthe day before yesterday",
  example:
    "In 2000 Angelina Jolie won an Oscar - в 2008 году Анджелина Джоли выиграла Оскар, \nI came home, called Jane and had dinner with my friend - Я пришел домой, позвонил Джейн и пообедал с моим другом",
};
const pastContinious = {
  name: "pastContinious",
  description:
    "Времена группы past, как правило, обращаются ко второй форме глагола. Не является в этом плане исключением и Past Continuous . Это время формируется путем прибавления 2-й формы вспомогательного глагола to be, а именно was для единственного числа и were для множественного. К смысловому глаголу в обязательном порядке добавляется окончание -ing.",
  example:
    "He was playing football at 11 o'clock - Он играл в футбол в 11 часов, \nHe was reading when somebody knocked at his window - Он читал, когда кто-то постучал в окно",
};

const times = [
    presentSimple, presentContinious, pastSimple, pastContinious
];

const modalVerbs = [
  {
    name: "can",
    description: "",
    example: "",
  },
  {
    name: "must",
    description: "",
    example: "",
  },
  {
    name: "should",
    description: "",
    example: "",
  },
  {
    name: "",
    description: "",
    example: "",
  },
];

const prepositions = {};

const unions = {};

module.exports = {
    times
}