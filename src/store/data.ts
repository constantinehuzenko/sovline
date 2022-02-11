/* eslint-disable no-template-curly-in-string */
import { IQuestionItem } from "types/model";

export const data: Array<IQuestionItem> = [
  {
    id: "74ccacd2-cf9b-4550-b9c8-3f9b0ed4006d",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = "Lydia";\n  let age = 21;\n}\n\nsayHi();\n',
    testVariants: [
      {
        id: "0f07cdbc-f561-4bfd-b1ce-b8d3d88fa72c",
        text: "<code>Lydia</code>  и <code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "24e2a7e6-afd1-4cc3-b177-bcfe3931d429",
        text: "<code>Lydia</code>  и <code>ReferenceError</code>",
        isCorrect: false,
      },
      {
        id: "01b5f3f6-714e-4b04-b71f-f1f14fc18fb1",
        text: "<code>ReferenceError</code>  и <code>21</code>",
        isCorrect: false,
      },
      {
        id: "66f37a26-8c61-4f04-bad7-16bbc0934174",
        text: "<code>undefined</code>  и <code>ReferenceError</code>",
        isCorrect: true,
      },
    ],
    explanation:
      'Внутри функции мы сперва определяем переменную <code>name</code>  с помощью ключевого слова <code>var</code> . Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением <code>undefined</code>  по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение <code>name</code>  когда пытаемся вывести её в консоль, поэтому в консоли будет <code>undefined</code> .\n\nПеременные, определенные с помощью <code>let</code>  (и <code>const</code> ), также поднимаются, но в отличие от <code>var</code> , не <i>инициализируются</i>. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется "временная мертвая зона". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение <code>ReferenceError</code> .\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "9ee9853d-4f50-4f33-bc7e-b7b920e593fa",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n",
    testVariants: [
      {
        id: "c3bda5ba-0b2d-47c5-b6ae-ea80ed2c0103",
        text: "<code>0 1 2</code>  и <code>0 1 2</code>",
        isCorrect: false,
      },
      {
        id: "c74e9e6e-c5d9-4a22-ba35-4d48b081548b",
        text: "<code>0 1 2</code>  и <code>3 3 3</code>",
        isCorrect: false,
      },
      {
        id: "23e553d6-7833-4a09-baa0-70b84229f6f1",
        text: "<code>3 3 3</code>  и <code>0 1 2</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "Из-за очереди событий в JavaScript, функция <code>setTimeout</code>  вызывается <em>после</em> того как цикл будет завершен. Так как переменная <code>i</code>  в первом цикле была определена с помощью <code>var</code> , она будет глобальной. В цикле мы каждый раз увеличиваем значение <code>i</code>  на <code>1</code> , используя унарный оператор <code>++</code> . К моменту выполнения функции <code>setTimeout</code>  значение <code>i</code>  будет равно <code>3</code>  в первом примере.\n\nВо втором цикле переменная <code>i</code>  определена с помощью <code>let</code> . Такие переменные (а также <code>const</code> ) имеют блочную область видимости (блок это что угодно между <code>{ }</code> ). С каждой итерацией <code>i</code>  будет иметь новое значение, и каждое значение будет замкнуто в своей области видимости внутри цикла.\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "71095df2-aa8a-4e67-bcf6-3ff9d0b34725",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n};\n\nshape.diameter();\nshape.perimeter();\n",
    testVariants: [
      {
        id: "47bcbb2a-d4d0-4bd1-bbb1-95c7272b16eb",
        text: "<code>20</code>  и <code>62.83185307179586</code>",
        isCorrect: false,
      },
      {
        id: "2e74a0a7-43fc-4bcc-bba4-c1266525315a",
        text: "<code>20</code>  и <code>NaN</code>",
        isCorrect: true,
      },
      {
        id: "ddd73a2e-a33d-4a4a-bec5-d7ac835fd2c7",
        text: "<code>20</code>  и <code>63</code>",
        isCorrect: false,
      },
      {
        id: "d3b8d90c-bab9-4508-bf60-df93ab174048",
        text: "<code>NaN</code>  и <code>63</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "Заметь, что <code>diameter</code>  это обычная функция, в то время как <code>perimeter</code>  это стрелочная функция.\n\nУ стрелочных функций значение <code>this</code>  указывает на окружающую область видимости, в отличие от обычных функций! Это значит, что при вызове <code>perimeter</code>  значение <code>this</code>  у этой функции указывает не на объект <code>shape</code> , а на внешнюю область видимости (например, window).\n\nУ этого объекта нет ключа <code>radius</code> , поэтому возвращается <code>undefined</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "2265a261-14cc-4a60-bb44-2a5751b5e133",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question: '+true;\n!"Lydia";\n',
    testVariants: [
      {
        id: "a17f2548-201d-42ab-bd37-8d5cdca9aaf0",
        text: "<code>1</code>  и <code>false</code>",
        isCorrect: true,
      },
      {
        id: "38b077fd-207f-47c7-ba7c-a062fac5571d",
        text: "<code>false</code>  и <code>NaN</code>",
        isCorrect: false,
      },
      {
        id: "21927ef3-cbf4-480d-b114-20154ec2c67b",
        text: "<code>false</code>  и <code>false</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'Унарный плюс приводит операнд к числу. <code>true</code>  это <code>1</code> , а <code>false</code>  это <code>0</code> .\n\nСтрока <code>\'Lydia\'</code>  это "истинное" значение. На самом деле мы спрашиваем "является ли это истинное значение ложным"? Ответ: <code>false</code> .\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "306f10f4-6509-4779-b491-c88a37001129",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что НЕ является валидным?",
    question:
      'const bird = {\n  size: "small"\n};\n\nconst mouse = {\n  name: "Mickey",\n  small: true\n};\n',
    testVariants: [
      {
        id: "dce388aa-f93e-41c4-b31b-6c81ffe28407",
        text: "<code>mouse.bird.size</code>",
        isCorrect: true,
      },
      {
        id: "3caaef79-109b-4e0d-be14-4f75c0b7b51d",
        text: "<code>mouse[bird.size]</code>",
        isCorrect: false,
      },
      {
        id: "f295e654-db8c-47c8-b410-2036127b2bb5",
        text: '<code>mouse[bird["size"]]</code>',
        isCorrect: false,
      },
      {
        id: "901950f7-df7b-47c6-bff8-cecd7a8818cb",
        text: "Все варианты валидны",
        isCorrect: false,
      },
    ],
    explanation:
      'В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не <em>набираем</em> их как строки, они всегда преобразовываются к строкам под капотом.\n\nJavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает <code>[</code>  и продолжает пока не встретит <code>]</code> . Только после этого он вычислит то, что находится внутри скобок.\n <code>mouse[bird.size]</code> : Сперва определяется <code>bird.size</code> , которое равно <code>"small"</code> . <code>mouse["small"]</code>  возвращает <code>true</code> .\n\nНо с записью через точку так не происходит. У <code>mouse</code>  нет ключа <code>bird</code> . Таким образом, <code>mouse.bird</code>  равно <code>undefined</code> . Затем мы запрашиваем ключ <code>size</code> , используя точечную нотацию: <code>mouse.bird.size</code> . Так как <code>mouse.bird</code>  это <code>undefined</code> , мы запрашиваем <code>undefined.size</code> . Это не является валидным, и мы получаем ошибку типа <code>Cannot read property "size" of undefined</code> .\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "5369566d-716c-4c5c-be36-47743c87bea6",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'let c = { greeting: "Hey!" };\nlet d;\n\nd = c;\nc.greeting = "Hello";\nconsole.log(d.greeting);\n',
    testVariants: [
      {
        id: "41112337-c6d4-486f-ba27-cc7ecc014e89",
        text: "<code>Hello</code>",
        isCorrect: true,
      },
      {
        id: "d94c594d-6f22-4070-b3b7-12669d9a2dba",
        text: "<code>Hey!</code>",
        isCorrect: false,
      },
      {
        id: "a58a4256-649a-4bb1-bfa4-2a090c6fee78",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "631ca80f-8810-4c52-bd02-1315e6a519ac",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
      {
        id: "750f305e-9669-4fd5-b1b1-325816bb19dc",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'В JavaScript все объекты являются <em>ссылочными</em> типами данных.\n\nСперва переменная <code>c</code>  указывает на объект. Затем мы указываем переменной <code>d</code>  ссылаться на тот же объект, что и <code>c</code> .\n\n<img src="https://i.imgur.com/ko5k0fs.png" width="200">\n\nКогда ты изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект.\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "10c3f631-7ccb-42d0-b74e-00c84f483113",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n",
    testVariants: [
      {
        id: "f2753ef7-7484-419f-b1eb-3d508688d0d7",
        text: "<code>true</code>  <code>false</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "5327c189-9262-4888-b9dd-16ae2bc3b3c6",
        text: "<code>false</code>  <code>false</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "f4ac5c53-1289-4029-b347-28b92426b386",
        text: "<code>true</code>  <code>false</code>  <code>false</code>",
        isCorrect: true,
      },
      {
        id: "9918874e-aac3-458e-b773-a31124d0b021",
        text: "<code>false</code>  <code>true</code>  <code>true</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "<code>new Number()</code>  это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных фич и это объект.\n\nОператор <code>==</code>  разрешает приведение типов, он проверяет равенство <em>значений</em>. Оба значения равны <code>3</code> , поэтому возвращается <code>true</code> .\n\nПри использовании оператора <code>===</code>  значение <em>и</em> тип должны быть одинаковыми. Но в нашем случае это не так: <code>new Number()</code>  это не число, это <strong>объект</strong>. Оба возвращают <code>false</code> .",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "fd5546cc-90fb-4c87-b77a-76127c0db7e9",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Каким будет результат?",
    question:
      'class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = "green" } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: "purple" });\nfreddie.colorChange("orange");\n',
    testVariants: [
      {
        id: "e9fee904-1612-45bf-b674-e30831154cc5",
        text: "<code>orange</code>",
        isCorrect: false,
      },
      {
        id: "34a8ddf1-999a-4a21-bc74-787c106e5b41",
        text: "<code>purple</code>",
        isCorrect: false,
      },
      {
        id: "2a319d40-82dd-4d5c-b571-ae723f21cfc3",
        text: "<code>green</code>",
        isCorrect: false,
      },
      {
        id: "4af3fb33-d549-4513-b635-cfc1a864af1b",
        text: "<code>TypeError</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "Функция <code>colorChange</code>  является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как <code>freddie</code>  это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка <code>TypeError</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "7ef06ab6-0fbb-4b65-b1d6-7e4d1b3111e8",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      "let greeting;\ngreetign = {}; // Опечатка!\nconsole.log(greetign);\n",
    testVariants: [
      {
        id: "e3d48f61-2127-46b6-b8bf-994cbf44f64a",
        text: "<code>{}</code>",
        isCorrect: true,
      },
      {
        id: "83ca2779-fb40-4c70-bcc4-7ad459af79d0",
        text: "<code>ReferenceError: greetign is not defined</code>",
        isCorrect: false,
      },
      {
        id: "c64e2d71-75fd-4c4c-bfc5-97145a1efae1",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'В консоли выведется объект, потому что мы только что создали пустой объект в глобальном объекте! Когда мы вместо <code>greeting</code>  написали <code>greetign</code> , интерпретатор JS на самом деле выполнил <code>global.greetign = {}</code>  (или <code>window.greetign = {}</code>  в браузере).\n\nНужно использовать <code>"use strict"</code> , чтобы избежать такого поведения. Эта запись поможет быть уверенным в том, что переменная была определена перед тем как ей присвоили значение.\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "9ea21559-5098-4b36-b3d1-ca415fb7aeb9",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что произойдет?",
    question:
      'function bark() {\n  console.log("Woof!");\n}\n\nbark.animal = "dog";\n',
    testVariants: [
      {
        id: "e5fc6705-7c3f-46d8-bf60-cf1b37e8d9a7",
        text: "Ничего, всё в порядке!",
        isCorrect: true,
      },
      {
        id: "1f5006f8-fc60-49e0-b397-8cb973807032",
        text: "<code>SyntaxError</code> . Нельзя добавлять свойства функциям таким способом.",
        isCorrect: false,
      },
      {
        id: "5dcd9d78-5342-40c6-bf72-1b737dd7f511",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "f90d99a4-dbd1-4771-b06f-1b3d962a387d",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "В JavaScript это возможно, т.к. функции это объекты! (Всё есть объект кроме примитивов).\n\nФункция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией.\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  // {
  //   id: "73a8e2c9-2e5f-4901-ba8a-d0f319cefe13",
  //   codeLanguage: "javascript",
  //   questionModel: "quiz",
  //   header: "Что будет в консоли?",
  //   question:
  //     'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person("Lydia", "Hallie");\nPerson.getFullName = function () {\n  return <code>${this.firstName} ${this.lastName}</code> ;\n}\n\nconsole.log(member.getFullName());\n',
  //   testVariants: [
  //     {
  //       id: "844e4a63-8043-4ba1-b4b8-e10c07f6baad",
  //       text: "<code>TypeError</code>",
  //       isCorrect: true,
  //     },
  //     {
  //       id: "3bc27c5b-521f-4ae2-bc0e-547085cf6ff4",
  //       text: "<code>SyntaxError</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "e09f61ab-2c3f-4ead-b8dc-70c4a9d4b681",
  //       text: "<code>Lydia Hallie</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "8e1f1e3d-ad1d-4ad5-baf8-c5be7ba9fab9",
  //       text: "<code>undefined</code>  <code>undefined</code>",
  //       isCorrect: false,
  //     },
  //   ],
  //   explanation:
  //     "Нельзя добавлять свойства конструктору, как обычному объекту. Если нужно добавить фичу всем объектам, то необходимо использовать прототипы. В данном случае\n\n```js\nPerson.prototype.getFullName = function () {\n  return <code>${this.firstName} ${this.lastName}</code> ;\n}\n```\n\nсделает метод <code>member.getFullName()</code>  рабочим. В чем тут преимущество? Предположим, что мы добавили этот метод к конструктору. Возможно, не каждому экземпляру <code>Person</code>  нужен этот метод. Это приведет к большим потерям памяти, т.к. все экземпляры будут иметь это свойство. Напротив, если мы добавим этот метод только к прототипу, у нас будет только одно место в памяти, к которому смогут обращаться все экземпляры!\n\n\n</details>",
  //   watched: false,
  //   isMarked: false,
  //   rate: 0,
  // },
  {
    id: "e803bc6f-b6fd-4ec0-b789-23355645302c",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person("Lydia", "Hallie");\nconst sarah = Person("Sarah", "Smith");\n\nconsole.log(lydia);\nconsole.log(sarah);\n',
    testVariants: [
      {
        id: "dd6200b8-845c-4e2f-b818-fe4124aba935",
        text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  и <code>undefined</code>',
        isCorrect: true,
      },
      {
        id: "114178f9-6a39-4439-b22d-a169bfce11cf",
        text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  и <code>Person {firstName: "Sarah", lastName: "Smith"}</code>',
        isCorrect: false,
      },
      {
        id: "7448e0cf-d350-45d4-b343-2e1132ce1c62",
        text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  и <code>{}</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "Для <code>sarah</code>  мы не использовали ключевое слово <code>new</code> . Использование <code>new</code>  приводит к созданию нового объекта. Но без <code>new</code>  он указывает на <strong>глобальный объект</strong>!\n\nМы указали, что <code>this.firstName</code>  равно <code>\"Sarah\"</code>  и <code>this.lastName</code>  равно <code>\"Smith\"</code> . На самом деле мы определили <code>global.firstName = 'Sarah'</code>  и <code>global.lastName = 'Smith'</code> . <code>sarah</code>  осталась <code>undefined</code> , поскольку мы не возвращаем значение из функции <code>Person</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "cb37cde8-7b1e-4794-b174-85d059b1ee6a",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Назовите три фазы распространения событий",
    question: null,
    testVariants: [
      {
        id: "dd98f410-5cb8-4d35-b9ff-11e2270075f7",
        text: "Цель > Захват > Всплытие",
        isCorrect: false,
      },
      {
        id: "cd149838-6f73-4294-bc79-5cb6d6ab6ae5",
        text: "Всплытие > Цель > Захват",
        isCorrect: false,
      },
      {
        id: "203c3cb7-e71d-4be1-b7b4-628dd64ee6e3",
        text: "Цель > Всплытие > Захват",
        isCorrect: false,
      },
      {
        id: "1d37180b-34c9-423a-baae-784abeab6021",
        text: "Захват > Цель > Всплытие",
        isCorrect: true,
      },
    ],
    explanation:
      'Во время фазы <strong>захвата</strong> событие распространяется с элементов родителей до элемента цели. После достижения <strong>цели</strong> начинается фаза <strong>всплытия</strong>.\n\n<img src="https://i.imgur.com/N18oRgd.png" width="200">\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "e7d8f292-8d4b-48ce-b95c-e303222aa043",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Все объекты имеют прототипы?",
    question: null,
    testVariants: [
      {
        id: "06b89663-cbbc-4956-b47d-443886e57bb2",
        text: "Да",
        isCorrect: false,
      },
      {
        id: "b3a8678f-26f7-4101-bf33-af73ea5eadbd",
        text: "Нет",
        isCorrect: true,
      },
    ],
    explanation:
      "Все объекты имеют прототипы, кроме <strong>базового объекта</strong>. Базовый объект имеет доступ до некоторых методов и свойств, таких как <code>.toString</code> . Именно поэтому мы можем использовать встроенные методы JavaScript! Все эти методы доступны в прототипе. Если JavaScript не может найти метод непосредственно у объекта, он продолжает поиск по цепочке прототипов пока не найдет.\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "e1ab0ce8-7a49-4cfe-b7ab-18c1d7732d53",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Каким будет результат?",
    question: 'function sum(a, b) {\n  return a + b;\n}\n\nsum(1, "2");\n',
    testVariants: [
      {
        id: "8f4c832a-fb55-4ea1-b4ea-1caa48d88d0d",
        text: "<code>NaN</code>",
        isCorrect: false,
      },
      {
        id: "4b5db966-a103-46ee-b2ba-be482d7c3e0d",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
      {
        id: "320c9889-6871-43ec-b4c2-64d9e84ad33f",
        text: '<code>"12"</code>',
        isCorrect: true,
      },
      {
        id: "5d65c4e3-31b0-4c55-bbe2-2e4542367a82",
        text: "<code>3</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'JavaScript это <strong>динамически типизированный язык</strong>: мы не определяем тип переменных. Переменные могут автоматически быть преобразованы из одного типа в другой без нашего участия, что называется <em>неявным приведением типов</em>. <strong>Приведение</strong> это преобразование из одного типа в другой.\n\nВ этом примере JavaScript сконвертировал число <code>1</code>  в строку, чтобы операция внутри функции имела смысл и вернула значение. Во время сложения числа  <code>1</code> ) и строки  <code>\'2\'</code> ) число преобразовывается к строке. Мы можем конкатенировать строки вот так: <code>"Hello" + "World"</code> . Таким образом, <code>"1" + "2"</code>  возвращает <code>"12"</code> .\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "2ff68f11-1a83-46af-bf41-a04c4a7b4b51",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      "let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);\n",
    testVariants: [
      {
        id: "32ad72ce-6e16-4f7b-b114-31e378ed89c8",
        text: "<code>1</code>  <code>1</code>  <code>2</code>",
        isCorrect: false,
      },
      {
        id: "9d113bbb-8219-43f9-bfd0-00d01cd1326e",
        text: "<code>1</code>  <code>2</code>  <code>2</code>",
        isCorrect: false,
      },
      {
        id: "ae6aca69-4fca-4449-b0b4-90244919f193",
        text: "<code>0</code>  <code>2</code>  <code>2</code>",
        isCorrect: true,
      },
      {
        id: "422b4422-4b39-4fcc-b6d7-af06aa0cb4a1",
        text: "<code>0</code>  <code>1</code>  <code>2</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "<strong>Постфиксный</strong> унарный оператор <code>++</code> :\n\n1. Возвращает значение  <code>0</code> )\n2. Инкрементирует значение (теперь число равно <code>1</code> )\n\n<strong>Префиксный</strong> унарный оператор <code>++</code> :\n\n1. Инкрементирует значение (число теперь равно <code>2</code> )\n2. Возвращает значение  <code>2</code> )\n\nРезультат: <code>0 2 2</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "ddbe62b7-0402-42ec-b697-e4251ea5360f",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'function getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = "Lydia";\nconst age = 21;\n\ngetPersonInf `${person} is ${age} years old`;\n',
    testVariants: [
      {
        id: "eb5b671b-4ae8-45d7-bab0-38ff5e701781",
        text: '<code>"Lydia"</code>  <code>21</code>  <code>["", " is ", " years old"]</code>',
        isCorrect: false,
      },
      {
        id: "07965791-84e7-4be8-bb27-44658bbd33a0",
        text: '<code>["", " is ", " years old"]</code>  <code>"Lydia"</code>  <code>21</code>',
        isCorrect: true,
      },
      {
        id: "f75e55b5-cb0a-44f0-ba5e-0b4d54007c6d",
        text: '<code>"Lydia"</code>  <code>["", " is ", " years old"]</code>  <code>21</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "При использовании тегированных шаблонных литералов первым аргументом всегда будет массив строковых значений. Оставшимися аргументами будут значения переданных выражений!\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "01d4c091-aafd-43d5-bcd0-600fa07fbef5",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'function checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log("Ты взрослый!");\n  } else if (data == { age: 18 }) {\n    console.log("Ты все еще взрослый.");\n  } else {\n    console.log <code>Хмм.. Кажется, у тебя нет возраста.</code> );\n  }\n}\n\ncheckAge({ age: 18 });\n',
    testVariants: [
      {
        id: "96ad3f65-65f2-41c9-bade-175c56dd53f5",
        text: "<code>Ты взрослый!</code>",
        isCorrect: false,
      },
      {
        id: "2411f0bd-635a-4227-b9fb-5776c4094a6b",
        text: "<code>Ты все еще взрослый.</code>",
        isCorrect: false,
      },
      {
        id: "e6204965-02f9-492f-b3b6-1899c6fc3969",
        text: "<code>Хмм.. Кажется, у тебя нет возраста.</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "В операциях сравнения примитивы сравниваются по их <em>значениям</em>, а объекты по <em>ссылкам</em>. JavaScript проверяет, чтобы объекты указывали на одну и ту же область памяти.\n\nСравниваемые объекты в нашем примере не такие: объект, переданный в качестве параметра, указывает на другую область памяти, чем объекты, используемые в сравнениях.\n\nПоэтому <code>{ age: 18 } === { age: 18 }</code>  и <code>{ age: 18 } == { age: 18 }</code>  возвращают <code>false</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "d5f336ee-3fb6-46c8-bda8-97e84b2267bd",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      "function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);\n",
    testVariants: [
      {
        id: "1bb3fba3-e812-4dec-b776-8a97592f77a7",
        text: '<code>"number"</code>',
        isCorrect: false,
      },
      {
        id: "2181fe94-df7f-4383-b22d-78e65fc4fbb9",
        text: '<code>"array"</code>',
        isCorrect: false,
      },
      {
        id: "1712b590-7806-40ad-ba8b-de64869ad81c",
        text: '<code>"object"</code>',
        isCorrect: true,
      },
      {
        id: "b9c7c1e0-5113-4f8d-b9da-52f3e826fdc2",
        text: '<code>"NaN"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      'Оператор распространения  <code>...args</code> ) возвращает массив с аргументами. Массив это объект, поэтому <code>typeof args</code>  возвращает <code>"object"</code> .\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "3aae9cb7-044a-428e-bac0-7563d31c9bb5",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'function getAge() {\n  "use strict";\n  age = 21;\n  console.log(age);\n}\n\ngetAge();\n',
    testVariants: [
      {
        id: "9b38e4f8-9787-4aeb-bb12-7fce305da35f",
        text: "<code>21</code>",
        isCorrect: false,
      },
      {
        id: "e97e831d-0a34-44f7-bfcb-8ef67384640d",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "fa2bdb4d-0f0b-43b9-b582-719a1066cb29",
        text: "<code>ReferenceError</code>",
        isCorrect: true,
      },
      {
        id: "1a811d71-151e-4827-b8a5-76a50380f124",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'Используя <code>"use strict"</code> , можно быть уверенным, что мы по ошибке не побъявим глобальные переменные. Мы ранее нигде не объявляли переменную <code>age</code> , поэтому с использованием <code>"use strict"</code>  возникнет <code>ReferenceError</code> . Без использования <code>"use strict"</code>  ошибки не возникнет, а переменная <code>age</code>  добавится в глобальный объект.\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "8258973e-e08f-41c6-b868-e4f9b80040ae",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Чему будет равно <code>sum</code> ?",
    question: 'const sum = eval("10*10+5");\n',
    testVariants: [
      {
        id: "d614807b-c18d-47c6-b32a-55bc2729e7d3",
        text: "<code>105</code>",
        isCorrect: true,
      },
      {
        id: "804d598c-18d8-4d9b-b5dd-6b0d73699ddc",
        text: '<code>"105"</code>',
        isCorrect: false,
      },
      {
        id: "0a7532d8-c888-4fbf-b19e-fdd034138904",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
      {
        id: "532c0476-7fb1-4767-b2f7-6e73f36637a7",
        text: '<code>"10*10+5"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "<code>eval</code>  выполняет код, переданный в виде строки. Если это выражение (как в данном случае), то вычисляется выражение. Выражение <code>10 * 10 + 5</code>  вернет число <code>105</code> .",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "be3a481e-2ac0-4847-bcf5-8a49869a02cd",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Как долго будет доступен cool_secret?",
    question: 'sessionStorage.setItem("cool_secret", 123);\n',
    testVariants: [
      {
        id: "2745d00e-0553-40f7-b6d1-6308b78bcb11",
        text: "Всегда, данные не потеряются.",
        isCorrect: false,
      },
      {
        id: "86a6bba2-0116-46e1-b036-d3015e4d365c",
        text: "Пока пользователь не закроет вкладку.",
        isCorrect: true,
      },
      {
        id: "1ad85421-6bc9-48e3-b570-aae0cfae43cc",
        text: "Пока пользователь не закроет браузер, а не только вкладку.",
        isCorrect: false,
      },
      {
        id: "695066c0-927e-421c-b4c5-247ac265590a",
        text: "Пока пользователь не выключит компьютер.",
        isCorrect: false,
      },
    ],
    explanation:
      "Данные, сохраненные в <code>sessionStorage</code>  очищаются после закрытия <em>вкладки</em>.\n\nПри использовании <code>localStorage</code>  данные сохраняются навсегда. Очистить их можно, например, используя <code>localStorage.clear()</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "515ccd1a-6aef-43e5-baf2-ed03df9318c7",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question: "var num = 8;\nvar num = 10;\n\nconsole.log(num);\n",
    testVariants: [
      {
        id: "766b8588-8fce-409b-b2b7-be406190aefe",
        text: "<code>8</code>",
        isCorrect: false,
      },
      {
        id: "27d1588c-b0f4-4acd-b817-f316bfabe35c",
        text: "<code>10</code>",
        isCorrect: true,
      },
      {
        id: "d9122d87-5370-471a-bec3-afaab5250ed0",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
      {
        id: "aeb7645d-c3dd-4c80-ba4f-2832ccc79bb3",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "С помощью ключевого слова <code>var</code>  можно определять сколько угодно переменных с одним и тем же именем. Переменная будет хранить последнее присвоенное значение.\n\nНо такой трюк нельзя проделать с <code>let</code>  и <code>const</code> , т.к. у них блочная область видимости.\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "61605fb9-1aa0-4ffd-b1c7-bba9fe6cc8b8",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Каким будет результат?",
    question:
      'const obj = { 1: "a", 2: "b", 3: "c" };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty("1");\nobj.hasOwnProperty(1);\nset.has("1");\nset.has(1);\n',
    testVariants: [
      {
        id: "0cf56c6f-ed6e-4e7f-bc4b-9a6bf1d3caf1",
        text: "<code>false</code>  <code>true</code>  <code>false</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "d8204095-d060-4711-b732-f9a0db029e73",
        text: "<code>false</code>  <code>true</code>  <code>true</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "d72f4d9b-696a-4f65-bc5c-24e786241edd",
        text: "<code>true</code>  <code>true</code>  <code>false</code>  <code>true</code>",
        isCorrect: true,
      },
      {
        id: "956ac507-d1e8-4e5d-b00a-927f61d06bfc",
        text: "<code>true</code>  <code>true</code>  <code>true</code>  <code>true</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "Все ключи объектов (кроме Symbols) являются строками, даже если заданы не в виде строк. Поэтому <code>obj.hasOwnProperty('1')</code>  так же возвращает true.\n\nНо это не работает для <code>set</code> . Значения <code>'1'</code>  нет в <code>set</code> : <code>set.has('1')</code>  возвращает <code>false</code> . Но <code>set.has(1)</code>  вернет <code>true</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "7a5872db-42a2-4381-b661-30d1967f67b9",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'const obj = { a: "one", b: "two", a: "three" };\nconsole.log(obj);\n',
    testVariants: [
      {
        id: "ee0480c7-94f7-4882-b3d3-9c9caba78a4a",
        text: '<code>{ a: "one", b: "two" }</code>',
        isCorrect: false,
      },
      {
        id: "a87698ca-b800-4791-b9fb-c254a27376ef",
        text: '<code>{ b: "two", a: "three" }</code>',
        isCorrect: false,
      },
      {
        id: "80adb537-b25e-41f6-b8a8-e9d77b2e409d",
        text: '<code>{ a: "three", b: "two" }</code>',
        isCorrect: true,
      },
      {
        id: "744043b2-7577-4929-b73f-5758419a84c8",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "Если есть два ключа с одинаковым именем, то ключ будет перезаписан. Его позиция сохранится, но значением будет последнее указанное.\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "36162d7c-db27-437f-bfd4-7104e915ed72",
    codeLanguage: "javascript",
    questionModel: "quiz",
    question: null,
    header:
      "Глобальный контекст исполнения создает две вещи: глобальный объект и <code>this</code> ",
    testVariants: [
      {
        id: "fa389b14-829e-4239-b1a8-6a6c5625e0b5",
        text: "Да",
        isCorrect: true,
      },
      {
        id: "552df491-5d70-42dc-b54b-222870efc01d",
        text: "Нет",
        isCorrect: false,
      },
      {
        id: "99c7b204-363c-4203-bc98-23afcea0ec9e",
        text: "Это зависит",
        isCorrect: false,
      },
    ],
    explanation:
      "Базовый контекст исполнения это глобальный контекст исполнения: это то, что доступно где угодно в твоем коде.\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "2d3ea03b-994d-4b2f-bd57-713020974452",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      "for (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}\n",
    testVariants: [
      {
        id: "d372bb2a-1468-4ff4-b507-80c974162991",
        text: "<code>1</code>  <code>2</code>",
        isCorrect: false,
      },
      {
        id: "c4e56e92-2b18-43fc-bad8-f2acaea0db51",
        text: "<code>1</code>  <code>2</code>  <code>3</code>",
        isCorrect: false,
      },
      {
        id: "4b3ca3fa-dbeb-48b4-bc1b-51c753965009",
        text: "<code>1</code>  <code>2</code>  <code>4</code>",
        isCorrect: true,
      },
      {
        id: "9ec78f2b-6617-406e-b164-3ae394d9d8d6",
        text: "<code>1</code>  <code>3</code>  <code>4</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "Оператор <code>continue</code>  пропускает итерацию, если условие возвращает <code>true</code> .\n\n\n</details>",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "050c80d7-0371-4f53-b9c2-e9998ed973b6",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Каким будет результат?",
    question:
      'String.prototype.giveLydiaPizza = () => {\n  return "Just give Lydia pizza already!";\n};\n\nconst name = "Lydia";\n\nname.giveLydiaPizza();\n',
    testVariants: [
      {
        id: "e0b0cd51-696b-4bf0-b6b2-837c7198f13d",
        text: '<code>"Just give Lydia pizza already!"</code>',
        isCorrect: true,
      },
      {
        id: "568aac54-2b35-4d58-bc8f-416bfb964d98",
        text: "<code>TypeError: not a function</code>",
        isCorrect: false,
      },
      {
        id: "52015bcf-4f32-4bef-bf4e-826e615bc81c",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
      {
        id: "358a9cbb-98b0-4be4-b1a3-e58c045479d7",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "<code>String</code>  это встроенный конструктор, к которому можно добавлять свойства. Я добавила метод к его прототипу. Строки-примитивы автоматически конвертируются к строкам-объектам. Поэтому все строки (строковые объекты) имеют доступ к этому методу!",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "82612885-7a74-4f28-b4d5-b9f7935eb4c3",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Что будет в консоли?",
    question:
      'const a = {};\nconst b = { key: "b" };\nconst c = { key: "c" };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);\n',
    testVariants: [
      {
        id: "5dfb9ef7-d47f-43b4-bb6c-c6801c8e270e",
        text: "<code>123</code>",
        isCorrect: false,
      },
      {
        id: "994dc542-238a-48a4-b1af-9782921851e3",
        text: "<code>456</code>",
        isCorrect: true,
      },
      {
        id: "d5c37eb9-f16e-4c25-bf94-5492eef3b03f",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "49003e62-ebf1-4952-be86-e863d8c99043",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту <code>a</code>  со значением <code>123</code> .\n\nТем не менее, когда мы приводим объект к строке, он становится <code>"[object Object]"</code> . Таким образом, мы говорим, что <code>a["object Object"] = 123</code> . Потом мы делаем то же самое. <code>c</code>  это другой объект, который мы неявно приводим к строке. Поэтому <code>a["object Object"] = 456</code> .\n\nЗатем, когда мы выводим <code>a[b]</code> , мы имеем в виду <code>a["object Object"]</code> . Мы только что установили туда значение <code>456</code> , поэтому в результате получаем <code>456</code> .\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "8c07ecc5-8939-49af-bcd7-7ae9f533c456",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Каким будет результат?",
    question:
      'const foo = () => console.log("First");\nconst bar = () => setTimeout(() => console.log("Second"));\nconst baz = () => console.log("Third");\n\nbar();\nfoo();\nbaz();\n',
    testVariants: [
      {
        id: "fbd66151-0f54-4f31-b65d-c85c1cdd8785",
        text: "<code>First</code>  <code>Second</code>  <code>Third</code>",
        isCorrect: false,
      },
      {
        id: "de420632-ee75-4409-b740-3496e54ad472",
        text: "<code>First</code>  <code>Third</code>  <code>Second</code>",
        isCorrect: true,
      },
      {
        id: "cb325734-906a-4924-ba6c-08242eef12b9",
        text: "<code>Second</code>  <code>First</code>  <code>Third</code>",
        isCorrect: false,
      },
      {
        id: "a11f74e9-3b19-4cb5-ba7f-14d8d68408a4",
        text: "<code>Second</code>  <code>Third</code>  <code>First</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'Мы вызываем функцию <code>setTimeout</code>  первой. Тем не менее, она выводится в консоль последней\n\nЭто происходит из-за того, что в браузерах у нас есть не только рантайм движок, но и <code>WebAPI</code> . <code>WebAPI</code>  предоставляет нам функцию <code>setTimeout</code>  и много других возможностей. Например, DOM.\n\nПосле того как <em>коллбек</em> отправлен в <code>WebAPI</code> , функция <code>setTimeout</code>  (но не коллбек!) вынимается из стека.\n\n<img src="https://i.imgur.com/X5wsHOg.png" width="200">\n\nТеперь вызывается <code>foo</code> , и <code>"First"</code>  выводится в консоль.\n\n<img src="https://i.imgur.com/Pvc0dGq.png" width="200">\n <code>foo</code>  достается из стека, и вызывается <code>baz</code> . <code>"Third"</code>  выводится в консоль.\n\n<img src="https://i.imgur.com/WhA2bCP.png" width="200">\n\nWebAPI не может добавлять содержимое в стек когда захочет. Вместо этого он отправляет коллбек-функцию в так называемую <em>очередь</em>.\n\n<img src="https://i.imgur.com/NSnDZmU.png" width="200">\n\nЗдесь на сцену выходит цикл событий (event loop). <strong>Event loop</strong> проверяет стек и очередь задач. Если стек пустой, то он берет первый элемент из очереди и отправляет его в стек.\n\n<img src="https://i.imgur.com/uyiScAI.png" width="200">\n\nВызывается <code>bar</code> , в консоль выводится <code>"Second"</code>  и эта функция достается из стека.\n\n\n</details>',
    watched: false,
    isMarked: false,
    rate: 0,
  },
];
