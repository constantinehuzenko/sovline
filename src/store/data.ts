/* eslint-disable no-template-curly-in-string */
import { IQuestionItem } from "types/model";

// export const data: Array<IQuestionItem> = [
//   {
//     id: "74ccacd2-cf9b-4550-b9c8-3f9b0ed4006d",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = "Lydia";\n  let age = 21;\n}\n\nsayHi();\n',
//     testVariants: [
//       {
//         id: "0f07cdbc-f561-4bfd-b1ce-b8d3d88fa72c",
//         text: "<code>Lydia</code>  и <code>undefined</code>",
//         isCorrect: false,
//       },
//       {
//         id: "24e2a7e6-afd1-4cc3-b177-bcfe3931d429",
//         text: "<code>Lydia</code>  и <code>ReferenceError</code>",
//         isCorrect: false,
//       },
//       {
//         id: "01b5f3f6-714e-4b04-b71f-f1f14fc18fb1",
//         text: "<code>ReferenceError</code>  и <code>21</code>",
//         isCorrect: false,
//       },
//       {
//         id: "66f37a26-8c61-4f04-bad7-16bbc0934174",
//         text: "<code>undefined</code>  и <code>ReferenceError</code>",
//         isCorrect: true,
//       },
//     ],
//     explanation:
//       'Внутри функции мы сперва определяем переменную <code>name</code>  с помощью ключевого слова <code>var</code> Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением <code>undefined</code>  по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение <code>name</code>  когда пытаемся вывести её в консоль, поэтому в консоли будет <code>undefined</code>\n\nПеременные, определенные с помощью <code>let</code>  (и <code>const</code> ), также поднимаются, но в отличие от <code>var</code> , не <i>инициализируются</i>. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется "временная мертвая зона". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение <code>ReferenceError</code>\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "9ee9853d-4f50-4f33-bc7e-b7b920e593fa",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n",
//     testVariants: [
//       {
//         id: "c3bda5ba-0b2d-47c5-b6ae-ea80ed2c0103",
//         text: "<code>0 1 2</code>  и <code>0 1 2</code>",
//         isCorrect: false,
//       },
//       {
//         id: "c74e9e6e-c5d9-4a22-ba35-4d48b081548b",
//         text: "<code>0 1 2</code>  и <code>3 3 3</code>",
//         isCorrect: false,
//       },
//       {
//         id: "23e553d6-7833-4a09-baa0-70b84229f6f1",
//         text: "<code>3 3 3</code>  и <code>0 1 2</code>",
//         isCorrect: true,
//       },
//     ],
//     explanation:
//       "Из-за очереди событий в JavaScript, функция <code>setTimeout</code>  вызывается <em>после</em> того как цикл будет завершен. Так как переменная <code>i</code>  в первом цикле была определена с помощью <code>var</code> , она будет глобальной. В цикле мы каждый раз увеличиваем значение <code>i</code>  на <code>1</code> , используя унарный оператор <code>++</code> К моменту выполнения функции <code>setTimeout</code>  значение <code>i</code>  будет равно <code>3</code>  в первом примере.\n\nВо втором цикле переменная <code>i</code>  определена с помощью <code>let</code> Такие переменные (а также <code>const</code> ) имеют блочную область видимости (блок это что угодно между <code>{ }</code> ). С каждой итерацией <code>i</code>  будет иметь новое значение, и каждое значение будет замкнуто в своей области видимости внутри цикла.\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "71095df2-aa8a-4e67-bcf6-3ff9d0b34725",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n};\n\nshape.diameter();\nshape.perimeter();\n",
//     testVariants: [
//       {
//         id: "47bcbb2a-d4d0-4bd1-bbb1-95c7272b16eb",
//         text: "<code>20</code>  и <code>62.83185307179586</code>",
//         isCorrect: false,
//       },
//       {
//         id: "2e74a0a7-43fc-4bcc-bba4-c1266525315a",
//         text: "<code>20</code>  и <code>NaN</code>",
//         isCorrect: true,
//       },
//       {
//         id: "ddd73a2e-a33d-4a4a-bec5-d7ac835fd2c7",
//         text: "<code>20</code>  и <code>63</code>",
//         isCorrect: false,
//       },
//       {
//         id: "d3b8d90c-bab9-4508-bf60-df93ab174048",
//         text: "<code>NaN</code>  и <code>63</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "Заметь, что <code>diameter</code>  это обычная функция, в то время как <code>perimeter</code>  это стрелочная функция.\n\nУ стрелочных функций значение <code>this</code>  указывает на окружающую область видимости, в отличие от обычных функций! Это значит, что при вызове <code>perimeter</code>  значение <code>this</code>  у этой функции указывает не на объект <code>shape</code> , а на внешнюю область видимости (например, window).\n\nУ этого объекта нет ключа <code>radius</code> , поэтому возвращается <code>undefined</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "2265a261-14cc-4a60-bb44-2a5751b5e133",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question: '+true;\n!"Lydia";\n',
//     testVariants: [
//       {
//         id: "a17f2548-201d-42ab-bd37-8d5cdca9aaf0",
//         text: "<code>1</code>  и <code>false</code>",
//         isCorrect: true,
//       },
//       {
//         id: "38b077fd-207f-47c7-ba7c-a062fac5571d",
//         text: "<code>false</code>  и <code>NaN</code>",
//         isCorrect: false,
//       },
//       {
//         id: "21927ef3-cbf4-480d-b114-20154ec2c67b",
//         text: "<code>false</code>  и <code>false</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'Унарный плюс приводит операнд к числу. <code>true</code>  это <code>1</code> , а <code>false</code>  это <code>0</code>\n\nСтрока <code>\'Lydia\'</code>  это "истинное" значение. На самом деле мы спрашиваем "является ли это истинное значение ложным"? Ответ: <code>false</code>\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "306f10f4-6509-4779-b491-c88a37001129",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что НЕ является валидным?",
//     question:
//       'const bird = {\n  size: "small"\n};\n\nconst mouse = {\n  name: "Mickey",\n  small: true\n};\n',
//     testVariants: [
//       {
//         id: "dce388aa-f93e-41c4-b31b-6c81ffe28407",
//         text: "<code>mouse.bird.size</code>",
//         isCorrect: true,
//       },
//       {
//         id: "3caaef79-109b-4e0d-be14-4f75c0b7b51d",
//         text: "<code>mouse[bird.size]</code>",
//         isCorrect: false,
//       },
//       {
//         id: "f295e654-db8c-47c8-b410-2036127b2bb5",
//         text: '<code>mouse[bird["size"]]</code>',
//         isCorrect: false,
//       },
//       {
//         id: "901950f7-df7b-47c6-bff8-cecd7a8818cb",
//         text: "Все варианты валидны",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не <em>набираем</em> их как строки, они всегда преобразовываются к строкам под капотом.\n\nJavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает <code>[</code>  и продолжает пока не встретит <code>]</code> Только после этого он вычислит то, что находится внутри скобок.\n <code>mouse[bird.size]</code> : Сперва определяется <code>bird.size</code> , которое равно <code>"small"</code> <code>mouse["small"]</code>  возвращает <code>true</code>\n\nНо с записью через точку так не происходит. У <code>mouse</code>  нет ключа <code>bird</code> Таким образом, <code>mouse.bird</code>  равно <code>undefined</code> Затем мы запрашиваем ключ <code>size</code> , используя точечную нотацию: <code>mouse.bird.size</code> Так как <code>mouse.bird</code>  это <code>undefined</code> , мы запрашиваем <code>undefined.size</code> Это не является валидным, и мы получаем ошибку типа <code>Cannot read property "size" of undefined</code>\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "5369566d-716c-4c5c-be36-47743c87bea6",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'let c = { greeting: "Hey!" };\nlet d;\n\nd = c;\nc.greeting = "Hello";\nconsole.log(d.greeting);\n',
//     testVariants: [
//       {
//         id: "41112337-c6d4-486f-ba27-cc7ecc014e89",
//         text: "<code>Hello</code>",
//         isCorrect: true,
//       },
//       {
//         id: "d94c594d-6f22-4070-b3b7-12669d9a2dba",
//         text: "<code>Hey!</code>",
//         isCorrect: false,
//       },
//       {
//         id: "a58a4256-649a-4bb1-bfa4-2a090c6fee78",
//         text: "<code>undefined</code>",
//         isCorrect: false,
//       },
//       {
//         id: "631ca80f-8810-4c52-bd02-1315e6a519ac",
//         text: "<code>ReferenceError</code>",
//         isCorrect: false,
//       },
//       {
//         id: "750f305e-9669-4fd5-b1b1-325816bb19dc",
//         text: "<code>TypeError</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'В JavaScript все объекты являются <em>ссылочными</em> типами данных.\n\nСперва переменная <code>c</code>  указывает на объект. Затем мы указываем переменной <code>d</code>  ссылаться на тот же объект, что и <code>c</code>\n\n<img src="https://i.imgur.com/ko5k0fs.png" width="200">\n\nКогда ты изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект.\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "10c3f631-7ccb-42d0-b74e-00c84f483113",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n",
//     testVariants: [
//       {
//         id: "f2753ef7-7484-419f-b1eb-3d508688d0d7",
//         text: "<code>true</code>  <code>false</code>  <code>true</code>",
//         isCorrect: false,
//       },
//       {
//         id: "5327c189-9262-4888-b9dd-16ae2bc3b3c6",
//         text: "<code>false</code>  <code>false</code>  <code>true</code>",
//         isCorrect: false,
//       },
//       {
//         id: "f4ac5c53-1289-4029-b347-28b92426b386",
//         text: "<code>true</code>  <code>false</code>  <code>false</code>",
//         isCorrect: true,
//       },
//       {
//         id: "9918874e-aac3-458e-b773-a31124d0b021",
//         text: "<code>false</code>  <code>true</code>  <code>true</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "<code>new Number()</code>  это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных фич и это объект.\n\nОператор <code>==</code>  разрешает приведение типов, он проверяет равенство <em>значений</em>. Оба значения равны <code>3</code> , поэтому возвращается <code>true</code>\n\nПри использовании оператора <code>===</code>  значение <em>и</em> тип должны быть одинаковыми. Но в нашем случае это не так: <code>new Number()</code>  это не число, это <strong>объект</strong>. Оба возвращают <code>false</code>",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "fd5546cc-90fb-4c87-b77a-76127c0db7e9",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Каким будет результат?",
//     question:
//       'class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = "green" } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: "purple" });\nfreddie.colorChange("orange");\n',
//     testVariants: [
//       {
//         id: "e9fee904-1612-45bf-b674-e30831154cc5",
//         text: "<code>orange</code>",
//         isCorrect: false,
//       },
//       {
//         id: "34a8ddf1-999a-4a21-bc74-787c106e5b41",
//         text: "<code>purple</code>",
//         isCorrect: false,
//       },
//       {
//         id: "2a319d40-82dd-4d5c-b571-ae723f21cfc3",
//         text: "<code>green</code>",
//         isCorrect: false,
//       },
//       {
//         id: "4af3fb33-d549-4513-b635-cfc1a864af1b",
//         text: "<code>TypeError</code>",
//         isCorrect: true,
//       },
//     ],
//     explanation:
//       "Функция <code>colorChange</code>  является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как <code>freddie</code>  это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка <code>TypeError</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "7ef06ab6-0fbb-4b65-b1d6-7e4d1b3111e8",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       "let greeting;\ngreetign = {}; // Опечатка!\nconsole.log(greetign);\n",
//     testVariants: [
//       {
//         id: "e3d48f61-2127-46b6-b8bf-994cbf44f64a",
//         text: "<code>{}</code>",
//         isCorrect: true,
//       },
//       {
//         id: "83ca2779-fb40-4c70-bcc4-7ad459af79d0",
//         text: "<code>ReferenceError: greetign is not defined</code>",
//         isCorrect: false,
//       },
//       {
//         id: "c64e2d71-75fd-4c4c-bfc5-97145a1efae1",
//         text: "<code>undefined</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'В консоли выведется объект, потому что мы только что создали пустой объект в глобальном объекте! Когда мы вместо <code>greeting</code>  написали <code>greetign</code> , интерпретатор JS на самом деле выполнил <code>global.greetign = {}</code>  (или <code>window.greetign = {}</code>  в браузере).\n\nНужно использовать <code>"use strict"</code> , чтобы избежать такого поведения. Эта запись поможет быть уверенным в том, что переменная была определена перед тем как ей присвоили значение.\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "9ea21559-5098-4b36-b3d1-ca415fb7aeb9",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что произойдет?",
//     question:
//       'function bark() {\n  console.log("Woof!");\n}\n\nbark.animal = "dog";\n',
//     testVariants: [
//       {
//         id: "e5fc6705-7c3f-46d8-bf60-cf1b37e8d9a7",
//         text: "Ничего, всё в порядке!",
//         isCorrect: true,
//       },
//       {
//         id: "1f5006f8-fc60-49e0-b397-8cb973807032",
//         text: "<code>SyntaxError</code> Нельзя добавлять свойства функциям таким способом.",
//         isCorrect: false,
//       },
//       {
//         id: "5dcd9d78-5342-40c6-bf72-1b737dd7f511",
//         text: "<code>undefined</code>",
//         isCorrect: false,
//       },
//       {
//         id: "f90d99a4-dbd1-4771-b06f-1b3d962a387d",
//         text: "<code>ReferenceError</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "В JavaScript это возможно, т.к. функции это объекты! (Всё есть объект кроме примитивов).\n\nФункция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией.\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   // {
//   //   id: "73a8e2c9-2e5f-4901-ba8a-d0f319cefe13",
//   //   codeLanguage: "javascript",
//   //   questionModel: "quiz",
//   //   header: "Что будет в консоли?",
//   //   question:
//   //     'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person("Lydia", "Hallie");\nPerson.getFullName = function () {\n  return <code>${this.firstName} ${this.lastName}</code> ;\n}\n\nconsole.log(member.getFullName());\n',
//   //   testVariants: [
//   //     {
//   //       id: "844e4a63-8043-4ba1-b4b8-e10c07f6baad",
//   //       text: "<code>TypeError</code>",
//   //       isCorrect: true,
//   //     },
//   //     {
//   //       id: "3bc27c5b-521f-4ae2-bc0e-547085cf6ff4",
//   //       text: "<code>SyntaxError</code>",
//   //       isCorrect: false,
//   //     },
//   //     {
//   //       id: "e09f61ab-2c3f-4ead-b8dc-70c4a9d4b681",
//   //       text: "<code>Lydia Hallie</code>",
//   //       isCorrect: false,
//   //     },
//   //     {
//   //       id: "8e1f1e3d-ad1d-4ad5-baf8-c5be7ba9fab9",
//   //       text: "<code>undefined</code>  <code>undefined</code>",
//   //       isCorrect: false,
//   //     },
//   //   ],
//   //   explanation:
//   //     "Нельзя добавлять свойства конструктору, как обычному объекту. Если нужно добавить фичу всем объектам, то необходимо использовать прототипы. В данном случае\n\n```js\nPerson.prototype.getFullName = function () {\n  return <code>${this.firstName} ${this.lastName}</code> ;\n}\n```\n\nсделает метод <code>member.getFullName()</code>  рабочим. В чем тут преимущество? Предположим, что мы добавили этот метод к конструктору. Возможно, не каждому экземпляру <code>Person</code>  нужен этот метод. Это приведет к большим потерям памяти, т.к. все экземпляры будут иметь это свойство. Напротив, если мы добавим этот метод только к прототипу, у нас будет только одно место в памяти, к которому смогут обращаться все экземпляры!\n\n\n",
//   //   watched: false,
//   //   isMarked: false,
//   //   rate: 0,
//   // },
//   {
//     id: "e803bc6f-b6fd-4ec0-b789-23355645302c",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person("Lydia", "Hallie");\nconst sarah = Person("Sarah", "Smith");\n\nconsole.log(lydia);\nconsole.log(sarah);\n',
//     testVariants: [
//       {
//         id: "dd6200b8-845c-4e2f-b818-fe4124aba935",
//         text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  и <code>undefined</code>',
//         isCorrect: true,
//       },
//       {
//         id: "114178f9-6a39-4439-b22d-a169bfce11cf",
//         text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  и <code>Person {firstName: "Sarah", lastName: "Smith"}</code>',
//         isCorrect: false,
//       },
//       {
//         id: "7448e0cf-d350-45d4-b343-2e1132ce1c62",
//         text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  и <code>{}</code>',
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "Для <code>sarah</code>  мы не использовали ключевое слово <code>new</code> Использование <code>new</code>  приводит к созданию нового объекта. Но без <code>new</code>  он указывает на <strong>глобальный объект</strong>!\n\nМы указали, что <code>this.firstName</code>  равно <code>\"Sarah\"</code>  и <code>this.lastName</code>  равно <code>\"Smith\"</code> На самом деле мы определили <code>global.firstName = 'Sarah'</code>  и <code>global.lastName = 'Smith'</code> <code>sarah</code>  осталась <code>undefined</code> , поскольку мы не возвращаем значение из функции <code>Person</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "cb37cde8-7b1e-4794-b174-85d059b1ee6a",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Назовите три фазы распространения событий",
//     question: null,
//     testVariants: [
//       {
//         id: "dd98f410-5cb8-4d35-b9ff-11e2270075f7",
//         text: "Цель > Захват > Всплытие",
//         isCorrect: false,
//       },
//       {
//         id: "cd149838-6f73-4294-bc79-5cb6d6ab6ae5",
//         text: "Всплытие > Цель > Захват",
//         isCorrect: false,
//       },
//       {
//         id: "203c3cb7-e71d-4be1-b7b4-628dd64ee6e3",
//         text: "Цель > Всплытие > Захват",
//         isCorrect: false,
//       },
//       {
//         id: "1d37180b-34c9-423a-baae-784abeab6021",
//         text: "Захват > Цель > Всплытие",
//         isCorrect: true,
//       },
//     ],
//     explanation:
//       'Во время фазы <strong>захвата</strong> событие распространяется с элементов родителей до элемента цели. После достижения <strong>цели</strong> начинается фаза <strong>всплытия</strong>.\n\n<img src="https://i.imgur.com/N18oRgd.png" width="200">\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "e7d8f292-8d4b-48ce-b95c-e303222aa043",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Все объекты имеют прототипы?",
//     question: null,
//     testVariants: [
//       {
//         id: "06b89663-cbbc-4956-b47d-443886e57bb2",
//         text: "Да",
//         isCorrect: false,
//       },
//       {
//         id: "b3a8678f-26f7-4101-bf33-af73ea5eadbd",
//         text: "Нет",
//         isCorrect: true,
//       },
//     ],
//     explanation:
//       "Все объекты имеют прототипы, кроме <strong>базового объекта</strong>. Базовый объект имеет доступ до некоторых методов и свойств, таких как <code>.toString</code> Именно поэтому мы можем использовать встроенные методы JavaScript! Все эти методы доступны в прототипе. Если JavaScript не может найти метод непосредственно у объекта, он продолжает поиск по цепочке прототипов пока не найдет.\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "e1ab0ce8-7a49-4cfe-b7ab-18c1d7732d53",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Каким будет результат?",
//     question: 'function sum(a, b) {\n  return a + b;\n}\n\nsum(1, "2");\n',
//     testVariants: [
//       {
//         id: "8f4c832a-fb55-4ea1-b4ea-1caa48d88d0d",
//         text: "<code>NaN</code>",
//         isCorrect: false,
//       },
//       {
//         id: "4b5db966-a103-46ee-b2ba-be482d7c3e0d",
//         text: "<code>TypeError</code>",
//         isCorrect: false,
//       },
//       {
//         id: "320c9889-6871-43ec-b4c2-64d9e84ad33f",
//         text: '<code>"12"</code>',
//         isCorrect: true,
//       },
//       {
//         id: "5d65c4e3-31b0-4c55-bbe2-2e4542367a82",
//         text: "<code>3</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'JavaScript это <strong>динамически типизированный язык</strong>: мы не определяем тип переменных. Переменные могут автоматически быть преобразованы из одного типа в другой без нашего участия, что называется <em>неявным приведением типов</em>. <strong>Приведение</strong> это преобразование из одного типа в другой.\n\nВ этом примере JavaScript сконвертировал число <code>1</code>  в строку, чтобы операция внутри функции имела смысл и вернула значение. Во время сложения числа  <code>1</code> ) и строки  <code>\'2\'</code> ) число преобразовывается к строке. Мы можем конкатенировать строки вот так: <code>"Hello" + "World"</code> Таким образом, <code>"1" + "2"</code>  возвращает <code>"12"</code>\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "2ff68f11-1a83-46af-bf41-a04c4a7b4b51",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       "let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);\n",
//     testVariants: [
//       {
//         id: "32ad72ce-6e16-4f7b-b114-31e378ed89c8",
//         text: "<code>1</code>  <code>1</code>  <code>2</code>",
//         isCorrect: false,
//       },
//       {
//         id: "9d113bbb-8219-43f9-bfd0-00d01cd1326e",
//         text: "<code>1</code>  <code>2</code>  <code>2</code>",
//         isCorrect: false,
//       },
//       {
//         id: "ae6aca69-4fca-4449-b0b4-90244919f193",
//         text: "<code>0</code>  <code>2</code>  <code>2</code>",
//         isCorrect: true,
//       },
//       {
//         id: "422b4422-4b39-4fcc-b6d7-af06aa0cb4a1",
//         text: "<code>0</code>  <code>1</code>  <code>2</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "<strong>Постфиксный</strong> унарный оператор <code>++</code> :\n\n1. Возвращает значение  <code>0</code> )\n2. Инкрементирует значение (теперь число равно <code>1</code> )\n\n<strong>Префиксный</strong> унарный оператор <code>++</code> :\n\n1. Инкрементирует значение (число теперь равно <code>2</code> )\n2. Возвращает значение  <code>2</code> )\n\nРезультат: <code>0 2 2</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "ddbe62b7-0402-42ec-b697-e4251ea5360f",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'function getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = "Lydia";\nconst age = 21;\n\ngetPersonInf `${person} is ${age} years old`;\n',
//     testVariants: [
//       {
//         id: "eb5b671b-4ae8-45d7-bab0-38ff5e701781",
//         text: '<code>"Lydia"</code>  <code>21</code>  <code>["", " is ", " years old"]</code>',
//         isCorrect: false,
//       },
//       {
//         id: "07965791-84e7-4be8-bb27-44658bbd33a0",
//         text: '<code>["", " is ", " years old"]</code>  <code>"Lydia"</code>  <code>21</code>',
//         isCorrect: true,
//       },
//       {
//         id: "f75e55b5-cb0a-44f0-ba5e-0b4d54007c6d",
//         text: '<code>"Lydia"</code>  <code>["", " is ", " years old"]</code>  <code>21</code>',
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "При использовании тегированных шаблонных литералов первым аргументом всегда будет массив строковых значений. Оставшимися аргументами будут значения переданных выражений!\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "01d4c091-aafd-43d5-bcd0-600fa07fbef5",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'function checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log("Ты взрослый!");\n  } else if (data == { age: 18 }) {\n    console.log("Ты все еще взрослый.");\n  } else {\n    console.log <code>Хмм.. Кажется, у тебя нет возраста.</code> );\n  }\n}\n\ncheckAge({ age: 18 });\n',
//     testVariants: [
//       {
//         id: "96ad3f65-65f2-41c9-bade-175c56dd53f5",
//         text: "<code>Ты взрослый!</code>",
//         isCorrect: false,
//       },
//       {
//         id: "2411f0bd-635a-4227-b9fb-5776c4094a6b",
//         text: "<code>Ты все еще взрослый.</code>",
//         isCorrect: false,
//       },
//       {
//         id: "e6204965-02f9-492f-b3b6-1899c6fc3969",
//         text: "<code>Хмм.. Кажется, у тебя нет возраста.</code>",
//         isCorrect: true,
//       },
//     ],
//     explanation:
//       "В операциях сравнения примитивы сравниваются по их <em>значениям</em>, а объекты по <em>ссылкам</em>. JavaScript проверяет, чтобы объекты указывали на одну и ту же область памяти.\n\nСравниваемые объекты в нашем примере не такие: объект, переданный в качестве параметра, указывает на другую область памяти, чем объекты, используемые в сравнениях.\n\nПоэтому <code>{ age: 18 } === { age: 18 }</code>  и <code>{ age: 18 } == { age: 18 }</code>  возвращают <code>false</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "d5f336ee-3fb6-46c8-bda8-97e84b2267bd",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       "function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);\n",
//     testVariants: [
//       {
//         id: "1bb3fba3-e812-4dec-b776-8a97592f77a7",
//         text: '<code>"number"</code>',
//         isCorrect: false,
//       },
//       {
//         id: "2181fe94-df7f-4383-b22d-78e65fc4fbb9",
//         text: '<code>"array"</code>',
//         isCorrect: false,
//       },
//       {
//         id: "1712b590-7806-40ad-ba8b-de64869ad81c",
//         text: '<code>"object"</code>',
//         isCorrect: true,
//       },
//       {
//         id: "b9c7c1e0-5113-4f8d-b9da-52f3e826fdc2",
//         text: '<code>"NaN"</code>',
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'Оператор распространения  <code>...args</code> ) возвращает массив с аргументами. Массив это объект, поэтому <code>typeof args</code>  возвращает <code>"object"</code>\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "3aae9cb7-044a-428e-bac0-7563d31c9bb5",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'function getAge() {\n  "use strict";\n  age = 21;\n  console.log(age);\n}\n\ngetAge();\n',
//     testVariants: [
//       {
//         id: "9b38e4f8-9787-4aeb-bb12-7fce305da35f",
//         text: "<code>21</code>",
//         isCorrect: false,
//       },
//       {
//         id: "e97e831d-0a34-44f7-bfcb-8ef67384640d",
//         text: "<code>undefined</code>",
//         isCorrect: false,
//       },
//       {
//         id: "fa2bdb4d-0f0b-43b9-b582-719a1066cb29",
//         text: "<code>ReferenceError</code>",
//         isCorrect: true,
//       },
//       {
//         id: "1a811d71-151e-4827-b8a5-76a50380f124",
//         text: "<code>TypeError</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'Используя <code>"use strict"</code> , можно быть уверенным, что мы по ошибке не побъявим глобальные переменные. Мы ранее нигде не объявляли переменную <code>age</code> , поэтому с использованием <code>"use strict"</code>  возникнет <code>ReferenceError</code> Без использования <code>"use strict"</code>  ошибки не возникнет, а переменная <code>age</code>  добавится в глобальный объект.\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "8258973e-e08f-41c6-b868-e4f9b80040ae",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Чему будет равно <code>sum</code> ?",
//     question: 'const sum = eval("10*10+5");\n',
//     testVariants: [
//       {
//         id: "d614807b-c18d-47c6-b32a-55bc2729e7d3",
//         text: "<code>105</code>",
//         isCorrect: true,
//       },
//       {
//         id: "804d598c-18d8-4d9b-b5dd-6b0d73699ddc",
//         text: '<code>"105"</code>',
//         isCorrect: false,
//       },
//       {
//         id: "0a7532d8-c888-4fbf-b19e-fdd034138904",
//         text: "<code>TypeError</code>",
//         isCorrect: false,
//       },
//       {
//         id: "532c0476-7fb1-4767-b2f7-6e73f36637a7",
//         text: '<code>"10*10+5"</code>',
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "<code>eval</code>  выполняет код, переданный в виде строки. Если это выражение (как в данном случае), то вычисляется выражение. Выражение <code>10 * 10 + 5</code>  вернет число <code>105</code>",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "be3a481e-2ac0-4847-bcf5-8a49869a02cd",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Как долго будет доступен cool_secret?",
//     question: 'sessionStorage.setItem("cool_secret", 123);\n',
//     testVariants: [
//       {
//         id: "2745d00e-0553-40f7-b6d1-6308b78bcb11",
//         text: "Всегда, данные не потеряются.",
//         isCorrect: false,
//       },
//       {
//         id: "86a6bba2-0116-46e1-b036-d3015e4d365c",
//         text: "Пока пользователь не закроет вкладку.",
//         isCorrect: true,
//       },
//       {
//         id: "1ad85421-6bc9-48e3-b570-aae0cfae43cc",
//         text: "Пока пользователь не закроет браузер, а не только вкладку.",
//         isCorrect: false,
//       },
//       {
//         id: "695066c0-927e-421c-b4c5-247ac265590a",
//         text: "Пока пользователь не выключит компьютер.",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "Данные, сохраненные в <code>sessionStorage</code>  очищаются после закрытия <em>вкладки</em>.\n\nПри использовании <code>localStorage</code>  данные сохраняются навсегда. Очистить их можно, например, используя <code>localStorage.clear()</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "515ccd1a-6aef-43e5-baf2-ed03df9318c7",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question: "var num = 8;\nvar num = 10;\n\nconsole.log(num);\n",
//     testVariants: [
//       {
//         id: "766b8588-8fce-409b-b2b7-be406190aefe",
//         text: "<code>8</code>",
//         isCorrect: false,
//       },
//       {
//         id: "27d1588c-b0f4-4acd-b817-f316bfabe35c",
//         text: "<code>10</code>",
//         isCorrect: true,
//       },
//       {
//         id: "d9122d87-5370-471a-bec3-afaab5250ed0",
//         text: "<code>SyntaxError</code>",
//         isCorrect: false,
//       },
//       {
//         id: "aeb7645d-c3dd-4c80-ba4f-2832ccc79bb3",
//         text: "<code>ReferenceError</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "С помощью ключевого слова <code>var</code>  можно определять сколько угодно переменных с одним и тем же именем. Переменная будет хранить последнее присвоенное значение.\n\nНо такой трюк нельзя проделать с <code>let</code>  и <code>const</code> , т.к. у них блочная область видимости.\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "61605fb9-1aa0-4ffd-b1c7-bba9fe6cc8b8",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Каким будет результат?",
//     question:
//       'const obj = { 1: "a", 2: "b", 3: "c" };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty("1");\nobj.hasOwnProperty(1);\nset.has("1");\nset.has(1);\n',
//     testVariants: [
//       {
//         id: "0cf56c6f-ed6e-4e7f-bc4b-9a6bf1d3caf1",
//         text: "<code>false</code>  <code>true</code>  <code>false</code>  <code>true</code>",
//         isCorrect: false,
//       },
//       {
//         id: "d8204095-d060-4711-b732-f9a0db029e73",
//         text: "<code>false</code>  <code>true</code>  <code>true</code>  <code>true</code>",
//         isCorrect: false,
//       },
//       {
//         id: "d72f4d9b-696a-4f65-bc5c-24e786241edd",
//         text: "<code>true</code>  <code>true</code>  <code>false</code>  <code>true</code>",
//         isCorrect: true,
//       },
//       {
//         id: "956ac507-d1e8-4e5d-b00a-927f61d06bfc",
//         text: "<code>true</code>  <code>true</code>  <code>true</code>  <code>true</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "Все ключи объектов (кроме Symbols) являются строками, даже если заданы не в виде строк. Поэтому <code>obj.hasOwnProperty('1')</code>  так же возвращает true.\n\nНо это не работает для <code>set</code> Значения <code>'1'</code>  нет в <code>set</code> : <code>set.has('1')</code>  возвращает <code>false</code> Но <code>set.has(1)</code>  вернет <code>true</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "7a5872db-42a2-4381-b661-30d1967f67b9",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'const obj = { a: "one", b: "two", a: "three" };\nconsole.log(obj);\n',
//     testVariants: [
//       {
//         id: "ee0480c7-94f7-4882-b3d3-9c9caba78a4a",
//         text: '<code>{ a: "one", b: "two" }</code>',
//         isCorrect: false,
//       },
//       {
//         id: "a87698ca-b800-4791-b9fb-c254a27376ef",
//         text: '<code>{ b: "two", a: "three" }</code>',
//         isCorrect: false,
//       },
//       {
//         id: "80adb537-b25e-41f6-b8a8-e9d77b2e409d",
//         text: '<code>{ a: "three", b: "two" }</code>',
//         isCorrect: true,
//       },
//       {
//         id: "744043b2-7577-4929-b73f-5758419a84c8",
//         text: "<code>SyntaxError</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "Если есть два ключа с одинаковым именем, то ключ будет перезаписан. Его позиция сохранится, но значением будет последнее указанное.\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "36162d7c-db27-437f-bfd4-7104e915ed72",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     question: null,
//     header:
//       "Глобальный контекст исполнения создает две вещи: глобальный объект и <code>this</code> ",
//     testVariants: [
//       {
//         id: "fa389b14-829e-4239-b1a8-6a6c5625e0b5",
//         text: "Да",
//         isCorrect: true,
//       },
//       {
//         id: "552df491-5d70-42dc-b54b-222870efc01d",
//         text: "Нет",
//         isCorrect: false,
//       },
//       {
//         id: "99c7b204-363c-4203-bc98-23afcea0ec9e",
//         text: "Это зависит",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "Базовый контекст исполнения это глобальный контекст исполнения: это то, что доступно где угодно в твоем коде.\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "2d3ea03b-994d-4b2f-bd57-713020974452",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       "for (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}\n",
//     testVariants: [
//       {
//         id: "d372bb2a-1468-4ff4-b507-80c974162991",
//         text: "<code>1</code>  <code>2</code>",
//         isCorrect: false,
//       },
//       {
//         id: "c4e56e92-2b18-43fc-bad8-f2acaea0db51",
//         text: "<code>1</code>  <code>2</code>  <code>3</code>",
//         isCorrect: false,
//       },
//       {
//         id: "4b3ca3fa-dbeb-48b4-bc1b-51c753965009",
//         text: "<code>1</code>  <code>2</code>  <code>4</code>",
//         isCorrect: true,
//       },
//       {
//         id: "9ec78f2b-6617-406e-b164-3ae394d9d8d6",
//         text: "<code>1</code>  <code>3</code>  <code>4</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "Оператор <code>continue</code>  пропускает итерацию, если условие возвращает <code>true</code>\n\n\n",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "050c80d7-0371-4f53-b9c2-e9998ed973b6",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Каким будет результат?",
//     question:
//       'String.prototype.giveLydiaPizza = () => {\n  return "Just give Lydia pizza already!";\n};\n\nconst name = "Lydia";\n\nname.giveLydiaPizza();\n',
//     testVariants: [
//       {
//         id: "e0b0cd51-696b-4bf0-b6b2-837c7198f13d",
//         text: '<code>"Just give Lydia pizza already!"</code>',
//         isCorrect: true,
//       },
//       {
//         id: "568aac54-2b35-4d58-bc8f-416bfb964d98",
//         text: "<code>TypeError: not a function</code>",
//         isCorrect: false,
//       },
//       {
//         id: "52015bcf-4f32-4bef-bf4e-826e615bc81c",
//         text: "<code>SyntaxError</code>",
//         isCorrect: false,
//       },
//       {
//         id: "358a9cbb-98b0-4be4-b1a3-e58c045479d7",
//         text: "<code>undefined</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       "<code>String</code>  это встроенный конструктор, к которому можно добавлять свойства. Я добавила метод к его прототипу. Строки-примитивы автоматически конвертируются к строкам-объектам. Поэтому все строки (строковые объекты) имеют доступ к этому методу!",
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "82612885-7a74-4f28-b4d5-b9f7935eb4c3",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Что будет в консоли?",
//     question:
//       'const a = {};\nconst b = { key: "b" };\nconst c = { key: "c" };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);\n',
//     testVariants: [
//       {
//         id: "5dfb9ef7-d47f-43b4-bb6c-c6801c8e270e",
//         text: "<code>123</code>",
//         isCorrect: false,
//       },
//       {
//         id: "994dc542-238a-48a4-b1af-9782921851e3",
//         text: "<code>456</code>",
//         isCorrect: true,
//       },
//       {
//         id: "d5c37eb9-f16e-4c25-bf94-5492eef3b03f",
//         text: "<code>undefined</code>",
//         isCorrect: false,
//       },
//       {
//         id: "49003e62-ebf1-4952-be86-e863d8c99043",
//         text: "<code>ReferenceError</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту <code>a</code>  со значением <code>123</code>\n\nТем не менее, когда мы приводим объект к строке, он становится <code>"[object Object]"</code> Таким образом, мы говорим, что <code>a["object Object"] = 123</code> Потом мы делаем то же самое. <code>c</code>  это другой объект, который мы неявно приводим к строке. Поэтому <code>a["object Object"] = 456</code>\n\nЗатем, когда мы выводим <code>a[b]</code> , мы имеем в виду <code>a["object Object"]</code> Мы только что установили туда значение <code>456</code> , поэтому в результате получаем <code>456</code>\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
//   {
//     id: "8c07ecc5-8939-49af-bcd7-7ae9f533c456",
//     codeLanguage: "javascript",
//     questionModel: "quiz",
//     header: "Каким будет результат?",
//     question:
//       'const foo = () => console.log("First");\nconst bar = () => setTimeout(() => console.log("Second"));\nconst baz = () => console.log("Third");\n\nbar();\nfoo();\nbaz();\n',
//     testVariants: [
//       {
//         id: "fbd66151-0f54-4f31-b65d-c85c1cdd8785",
//         text: "<code>First</code>  <code>Second</code>  <code>Third</code>",
//         isCorrect: false,
//       },
//       {
//         id: "de420632-ee75-4409-b740-3496e54ad472",
//         text: "<code>First</code>  <code>Third</code>  <code>Second</code>",
//         isCorrect: true,
//       },
//       {
//         id: "cb325734-906a-4924-ba6c-08242eef12b9",
//         text: "<code>Second</code>  <code>First</code>  <code>Third</code>",
//         isCorrect: false,
//       },
//       {
//         id: "a11f74e9-3b19-4cb5-ba7f-14d8d68408a4",
//         text: "<code>Second</code>  <code>Third</code>  <code>First</code>",
//         isCorrect: false,
//       },
//     ],
//     explanation:
//       'Мы вызываем функцию <code>setTimeout</code>  первой. Тем не менее, она выводится в консоль последней\n\nЭто происходит из-за того, что в браузерах у нас есть не только рантайм движок, но и <code>WebAPI</code> <code>WebAPI</code>  предоставляет нам функцию <code>setTimeout</code>  и много других возможностей. Например, DOM.\n\nПосле того как <em>коллбек</em> отправлен в <code>WebAPI</code> , функция <code>setTimeout</code>  (но не коллбек!) вынимается из стека.\n\n<img src="https://i.imgur.com/X5wsHOg.png" width="200">\n\nТеперь вызывается <code>foo</code> , и <code>"First"</code>  выводится в консоль.\n\n<img src="https://i.imgur.com/Pvc0dGq.png" width="200">\n <code>foo</code>  достается из стека, и вызывается <code>baz</code> <code>"Third"</code>  выводится в консоль.\n\n<img src="https://i.imgur.com/WhA2bCP.png" width="200">\n\nWebAPI не может добавлять содержимое в стек когда захочет. Вместо этого он отправляет коллбек-функцию в так называемую <em>очередь</em>.\n\n<img src="https://i.imgur.com/NSnDZmU.png" width="200">\n\nЗдесь на сцену выходит цикл событий (event loop). <strong>Event loop</strong> проверяет стек и очередь задач. Если стек пустой, то он берет первый элемент из очереди и отправляет его в стек.\n\n<img src="https://i.imgur.com/uyiScAI.png" width="200">\n\nВызывается <code>bar</code> , в консоль выводится <code>"Second"</code>  и эта функция достается из стека.\n\n\n',
//     watched: false,
//     isMarked: false,
//     rate: 0,
//   },
// ];

export const data: Array<IQuestionItem> = [
  {
    id: "fa395510-80e3-4a78-b2c4-5d480ea1abd2",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = 'Lydia';\n  let age = 21;\n}\n\nsayHi();\n",
    testVariants: [
      {
        id: "27931354-c7a1-4f40-b586-125380372666",
        text: "<code>Lydia</code>  and <code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "237a9d72-eae6-487c-b2fe-8b239d9de50c",
        text: "<code>Lydia</code>  and <code>ReferenceError</code>",
        isCorrect: false,
      },
      {
        id: "00ad2726-efea-4fa4-babd-627d8e04b266",
        text: "<code>ReferenceError</code>  and <code>21</code>",
        isCorrect: false,
      },
      {
        id: "d9c782e7-487b-4d30-bb93-3303f539e760",
        text: "<code>undefined</code>  and <code>ReferenceError</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "Within the function, we first declare the <code>name</code>  variable with the <code>var</code>  keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code> , until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the <code>name</code>  variable, so it still holds the value of <code>undefined</code>\n\nVariables with the <code>let</code>  keyword (and <code>const</code> ) are hoisted, but unlike <code>var</code> , don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "f6b5a35e-010f-4ea9-b0c7-715ac6720dcd",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n",
    testVariants: [
      {
        id: "a2afc794-6eee-4a72-b84c-a084a7608270",
        text: "<code>0 1 2</code>  and <code>0 1 2</code>",
        isCorrect: false,
      },
      {
        id: "cc6bd030-8c3d-424f-bc65-af550e68ffe9",
        text: "<code>0 1 2</code>  and <code>3 3 3</code>",
        isCorrect: false,
      },
      {
        id: "951f6b8e-f75f-48c3-b62b-4eec8b230dbf",
        text: "<code>3 3 3</code>  and <code>0 1 2</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "Because of the event queue in JavaScript, the <code>setTimeout</code>  callback function is called  <em>after</em>  the loop has been executed. Since the variable <code>i</code>  in the first loop was declared using the <code>var</code>  keyword, this value was global. During the loop, we incremented the value of <code>i</code>  by <code>1</code>  each time, using the unary operator <code>++</code> By the time the <code>setTimeout</code>  callback function was invoked, <code>i</code>  was equal to <code>3</code>  in the first example.\n\nIn the second loop, the variable <code>i</code>  was declared using the <code>let</code>  keyword: variables declared with the <code>let</code>  (and <code>const</code> ) keyword are block-scoped (a block is anything between <code>{ }</code> ). During each iteration, <code>i</code>  will have a new value, and each value is scoped inside the loop.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "37503a50-ef5f-4280-bcdc-c32a01f44acb",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());\n",
    testVariants: [
      {
        id: "edea35bd-0257-4f88-bba3-f0fbeb88b3fc",
        text: "<code>20</code>  and <code>62.83185307179586</code>",
        isCorrect: false,
      },
      {
        id: "0e1ef6dd-96b1-43c5-bbac-5f84f4e7f12a",
        text: "<code>20</code>  and <code>NaN</code>",
        isCorrect: true,
      },
      {
        id: "16be7d4e-c240-4aae-bb60-12db372bb710",
        text: "<code>20</code>  and <code>63</code>",
        isCorrect: false,
      },
      {
        id: "ccce591c-6aa6-4e5e-bc62-9a0081f8be84",
        text: "<code>NaN</code>  and <code>63</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "Note that the value of <code>diameter</code>  is a regular function, whereas the value of <code>perimeter</code>  is an arrow function.\n\nWith arrow functions, the <code>this</code>  keyword refers to its current surrounding scope, unlike regular functions! This means that when we call <code>perimeter</code> , it doesn't refer to the shape object, but to its surrounding scope (window for example).\n\nThere is no value <code>radius</code>  on that object, which returns <code>NaN</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "a8acf946-f983-42c9-b4b6-add4b93c85d1",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "+true;\n!'Lydia';\n",
    testVariants: [
      {
        id: "b0debdcf-8054-4277-b79e-6b695565c153",
        text: "<code>1</code>  and <code>false</code>",
        isCorrect: true,
      },
      {
        id: "4004e23c-2dc6-4488-b5ce-116149b9db18",
        text: "<code>false</code>  and <code>NaN</code>",
        isCorrect: false,
      },
      {
        id: "809e19d0-2d51-47bc-b36b-2d51f3cb0091",
        text: "<code>false</code>  and <code>false</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "The unary plus tries to convert an operand to a number. <code>true</code>  is <code>1</code> , and <code>false</code>  is <code>0</code>\n\nThe string <code>'Lydia'</code>  is a truthy value. What we're actually asking, is \"is this truthy value falsy?\". This returns <code>false</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "770b8bc4-ca81-40fb-ba18-bcfa3ce17d19",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Which one is true?",
    question:
      "const bird = {\n  size: 'small',\n};\n\nconst mouse = {\n  name: 'Mickey',\n  small: true,\n};\n",
    testVariants: [
      {
        id: "639d884c-fdc0-4491-b19f-b8a6cc287cfc",
        text: "<code>mouse.bird.size</code>  is not valid",
        isCorrect: true,
      },
      {
        id: "ce6da1f8-c749-4521-b2ee-6b7f35e9d37e",
        text: "<code>mouse[bird.size]</code>  is not valid",
        isCorrect: false,
      },
      {
        id: "a50ae0c3-b29d-4ba3-bf04-1ce41e7cc15e",
        text: '<code>mouse[bird["size"]]</code>  is not valid',
        isCorrect: false,
      },
      {
        id: "29ee9852-ed9d-4d0e-bff6-2c65a9814bc5",
        text: "All of them are valid",
        isCorrect: false,
      },
    ],
    explanation:
      'In JavaScript, all object keys are strings (unless it\'s a Symbol). Even though we might not  <em>type</em>  them as strings, they are always converted into strings under the hood.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code>  and keeps going until it finds the closing bracket <code>]</code> Only then, it will evaluate the statement.\n <code>mouse[bird.size]</code> : First it evaluates <code>bird.size</code> , which is <code>"small"</code> <code>mouse["small"]</code>  returns <code>true</code> \n\nHowever, with dot notation, this doesn\'t happen. <code>mouse</code>  does not have a key called <code>bird</code> , which means that <code>mouse.bird</code>  is <code>undefined</code> Then, we ask for the <code>size</code>  using dot notation: <code>mouse.bird.size</code> Since <code>mouse.bird</code>  is <code>undefined</code> , we\'re actually asking <code>undefined.size</code> This isn\'t valid, and will throw an error similar to <code>Cannot read property "size" of undefined</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "571c3359-0c68-46fc-b999-880f3930b0ae",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "let c = { greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);\n",
    testVariants: [
      {
        id: "0c26f48f-658e-4ea8-b7a2-807cc30dc559",
        text: "<code>Hello</code>",
        isCorrect: true,
      },
      {
        id: "febf1c9b-23df-4881-bd2d-17d78068527f",
        text: "<code>Hey!</code>",
        isCorrect: false,
      },
      {
        id: "967d7b59-edae-4580-bc44-a7a98c0325ee",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "dc05f23e-efcc-45ed-bbe9-085857dd8bda",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
      {
        id: "825155d5-e5de-4c18-b5ba-a15a042f2103",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'In JavaScript, all objects interact by  <em>reference</em>  when setting them equal to each other.\n\nFirst, variable <code>c</code>  holds a value to an object. Later, we assign <code>d</code>  with the same reference that <code>c</code>  has to the object.\n\n<img src="https://i.imgur.com/ko5k0fs.png" width="200">\n\nWhen you change one object, you change all of them.\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "5b72fa3c-5abe-43c7-be2c-ccf34947c2bd",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n",
    testVariants: [
      {
        id: "c850a157-72c3-4d70-bd97-88b59ea452b5",
        text: "<code>true</code>  <code>false</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "b45a7274-d79e-40f3-b0f0-c273ee8c75e3",
        text: "<code>false</code>  <code>false</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "6f0369db-1999-4d0e-b1be-6ba18d969c7a",
        text: "<code>true</code>  <code>false</code>  <code>false</code>",
        isCorrect: true,
      },
      {
        id: "4ea70562-e40a-4e52-bc96-4d372ebfb6f0",
        text: "<code>false</code>  <code>true</code>  <code>true</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "<p>\n <code>new Number()</code>  is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n\nWhen we use the <code>==</code>  operator, it only checks whether it has the same  <em>value</em> They both have the value of <code>3</code> , so it returns <code>true</code>\n\nHowever, when we use the <code>===</code>  operator, both value  <em>and</em>  type should be the same. It's not: <code>new Number()</code>  is not a number, it's an  <strong>object</strong> Both return <code>false.</code> \n\n</p>\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  // {
  //   id: "357ab997-1efc-4ec3-b97f-8180bc4428c8",
  //   codeLanguage: "javascript",
  //   questionModel: "quiz",
  //   header: "What's the output?",
  //   question:
  //     "class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = 'green' } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: 'purple' });\nconsole.log(freddie.colorChange('orange'));\n",
  //   testVariants: [
  //     {
  //       id: "335b9c29-79ca-482c-b196-ef2adfb0ad1e",
  //       text: "<code>orange</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "0c91e91f-5891-469d-b446-192e42757b79",
  //       text: "<code>purple</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "f84d2b84-e945-4034-b286-344cdd122cd9",
  //       text: "<code>green</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "ef43dedb-c8ff-4bd1-b5b6-bb3ab3c7ca89",
  //       text: "<code>TypeError</code>",
  //       isCorrect: true,
  //     },
  //   ],
  //   explanation:
  //     "The <code>colorChange</code>  function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since <code>freddie</code>  is an instance of class Chameleon, the function cannot be called upon it. A <code>TypeError</code>  is thrown.\n\n\n",
  //   watched: false,
  //   isMarked: false,
  //   rate: 0,
  // },
  {
    id: "02b43167-c551-4f95-bc9d-d97f63b4be64",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);\n",
    testVariants: [
      {
        id: "51389448-c34d-418d-b6f9-c9965a252e00",
        text: "<code>{}</code>",
        isCorrect: true,
      },
      {
        id: "8cc1b57e-8ca1-468c-be2c-a777cab44342",
        text: "<code>ReferenceError: greetign is not defined</code>",
        isCorrect: false,
      },
      {
        id: "751c5626-47d2-47d8-bfd6-4f01614ea149",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'It logs the object, because we just created an empty object on the global object! When we mistyped <code>greeting</code>  as <code>greetign</code> , the JS interpreter actually saw this as <code>global.greetign = {}</code>  (or <code>window.greetign = {}</code>  in a browser).\n\nIn order to avoid this, we can use <code>"use strict"</code> This makes sure that you have declared a variable before setting it equal to anything.\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "07e32649-40ea-4108-b53f-0305dc47ec64",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What happens when we do this?",
    question:
      "function bark() {\n  console.log('Woof!');\n}\n\nbark.animal = 'dog';\n",
    testVariants: [
      {
        id: "6346383c-1010-463e-b0d4-b463cbee9bf4",
        text: "Nothing, this is totally fine!",
        isCorrect: true,
      },
      {
        id: "bb5aa000-9439-428c-b7db-8e83b3e95996",
        text: "<code>SyntaxError</code> You cannot add properties to a function this way.",
        isCorrect: false,
      },
      {
        id: "69c516de-38ae-488f-b88a-3b2a05ae2542",
        text: '<code>"Woof"</code>  gets logged.',
        isCorrect: false,
      },
      {
        id: "3836fa85-9538-4e7b-bcee-776b986e8ca2",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\n\nA function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "3bcefa9f-3703-4055-b702-ca7a31b3673a",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person('Lydia', 'Hallie');\nPerson.getFullName = function() {\n  return <code>${this.firstName} ${this.lastName}</code> ;\n};\n\nconsole.log(member.getFullName());\n",
    testVariants: [
      {
        id: "a55ae4b8-961f-4211-b4d2-a4e29dc918ac",
        text: "<code>TypeError</code>",
        isCorrect: true,
      },
      {
        id: "0a2e9c48-6c29-4897-b797-6527b5b45d4b",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
      {
        id: "1184e547-6b7b-4506-b34b-ffac850dc4aa",
        text: "<code>Lydia Hallie</code>",
        isCorrect: false,
      },
      {
        id: "13a3ef61-1aaa-41de-bad2-b74b60584aac",
        text: "<code>undefined</code>  <code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "In JavaScript, functions are objects, and therefore, the method <code>getFullName</code>  gets added to the constructor function object itself. For that reason, we can call <code>Person.getFullName()</code> , but <code>member.getFullName</code>  throws a <code>TypeError</code> \n\nIf you want a method to be available to all object instances, you have to add it to the prototype property:\n\n```js\nPerson.prototype.getFullName = function() {\n  return <code>${this.firstName} ${this.lastName}</code> ;\n};\n```\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  // {
  //   id: "9b0eca3e-1891-4cd9-bc47-aefb78289da3",
  //   codeLanguage: "javascript",
  //   questionModel: "quiz",
  //   header: "What's the output?",
  //   question:
  //     "function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person('Lydia', 'Hallie');\nconst sarah = Person('Sarah', 'Smith');\n\nconsole.log(lydia);\nconsole.log(sarah);\n",
  //   testVariants: [
  //     {
  //       id: "815d7acc-c56f-426d-bc2a-9b3c27569d3a",
  //       text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  and <code>undefined</code>',
  //       isCorrect: true,
  //     },
  //     {
  //       id: "7837864a-cbb3-4b82-b07e-6f44bdedee80",
  //       text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  and <code>Person {firstName: "Sarah", lastName: "Smith"}</code>',
  //       isCorrect: false,
  //     },
  //     {
  //       id: "e639f950-64ba-4ec0-bb8b-24599696224f",
  //       text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  and <code>{}</code>',
  //       isCorrect: false,
  //     },
  //     {
  //       id: "457766f6-1def-4239-b2fc-423a79bb876b",
  //       text: '<code>Person {firstName: "Lydia", lastName: "Hallie"}</code>  and <code>ReferenceError</code>',
  //       isCorrect: false,
  //     },
  //   ],
  //   explanation:
  //     "For <code>sarah</code> , we didn't use the <code>new</code>  keyword. When using <code>new</code> , <code>this</code>  refers to the new empty object we create. However, if you don't add <code>new</code> , <code>this</code>  refers to the  <strong>global object</strong> !\n\nWe said that <code>this.firstName</code>  equals <code>\"Sarah\"</code>  and <code>this.lastName</code>  equals <code>\"Smith\"</code> What we actually did, is defining <code>global.firstName = 'Sarah'</code>  and <code>global.lastName = 'Smith'</code> <code>sarah</code>  itself is left <code>undefined</code> , since we don't return a value from the <code>Person</code>  function.\n\n\n",
  //   watched: false,
  //   isMarked: false,
  //   rate: 0,
  // },
  {
    id: "d67e69b4-f924-42ee-b5c0-c00ff073452d",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "function sum(a, b) {\n  return a + b;\n}\n\nsum(1, '2');\n",
    testVariants: [
      {
        id: "7cbac07f-0fc8-40ef-b567-9b726f4aa0f9",
        text: "<code>NaN</code>",
        isCorrect: false,
      },
      {
        id: "98b17fcf-ddd4-4ee6-b803-94713244dde4",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
      {
        id: "89ff4be0-0022-4151-b77c-032c09ff8c46",
        text: '<code>"12"</code>',
        isCorrect: true,
      },
      {
        id: "37890a63-a24b-4b49-bdc9-e8af91c0634c",
        text: "<code>3</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'JavaScript is a  <strong>dynamically typed language</strong> : we don\'t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called  <em>implicit type coercion</em>  <strong>Coercion</strong>  is converting from one type into another.\n\nIn this example, JavaScript converts the number <code>1</code>  into a string, in order for the function to make sense and return a value. During the addition of a numeric type  <code>1</code> ) and a string type  <code>\'2\'</code> ), the number is treated as a string. We can concatenate strings like <code>"Hello" + "World"</code> , so what\'s happening here is <code>"1" + "2"</code>  which returns <code>"12"</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "59f1ed3e-0ab0-40e8-b4af-ec1c72168108",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);\n",
    testVariants: [
      {
        id: "db79bc6e-4951-4253-b296-c0164c9eb235",
        text: "<code>1</code>  <code>1</code>  <code>2</code>",
        isCorrect: false,
      },
      {
        id: "4535b60d-71bc-4bcb-b892-f7c29cac4af6",
        text: "<code>1</code>  <code>2</code>  <code>2</code>",
        isCorrect: false,
      },
      {
        id: "43da315c-af24-4cac-bf52-5fb6d68edd15",
        text: "<code>0</code>  <code>2</code>  <code>2</code>",
        isCorrect: true,
      },
      {
        id: "944bb13e-574a-420e-b6de-d8c66c855365",
        text: "<code>0</code>  <code>1</code>  <code>2</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "The  <strong>postfix</strong>  unary operator <code>++</code> :\n\n1. Returns the value (this returns <code>0</code> )\n2. Increments the value (number is now <code>1</code> )\n\nThe  <strong>prefix</strong>  unary operator <code>++</code> :\n\n1. Increments the value (number is now <code>2</code> )\n2. Returns the value (this returns <code>2</code> )\n\nThis returns <code>0 2 2</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "19583fd4-019d-4b99-b3a0-19cd98ff4d53",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = 'Lydia';\nconst age = 21;\n\ngetPersonInf <code>${person} is ${age} years old</code> ;\n",
    testVariants: [
      {
        id: "4309dd91-540e-4cbb-b4f0-ff825737ce15",
        text: '<code>"Lydia"</code>  <code>21</code>  <code>["", " is ", " years old"]</code>',
        isCorrect: false,
      },
      {
        id: "abc0ed51-6782-4666-ba01-56695b589d94",
        text: '<code>["", " is ", " years old"]</code>  <code>"Lydia"</code>  <code>21</code>',
        isCorrect: true,
      },
      {
        id: "926a045d-dfd0-46e9-b845-c1ff49b97ac8",
        text: '<code>"Lydia"</code>  <code>["", " is ", " years old"]</code>  <code>21</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "32ae3f81-7f7a-4534-b7b8-70e8842ef189",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log('You are an adult!');\n  } else if (data == { age: 18 }) {\n    console.log('You are still an adult.');\n  } else {\n    console.log <code>Hmm.. You don't have an age I guess</code> );\n  }\n}\n\ncheckAge({ age: 18 });\n",
    testVariants: [
      {
        id: "99007f4f-3f47-43bf-ba59-59f68db8c846",
        text: "<code>You are an adult!</code>",
        isCorrect: false,
      },
      {
        id: "7ee0d093-e00f-4120-bc71-9feaf93171c6",
        text: "<code>You are still an adult.</code>",
        isCorrect: false,
      },
      {
        id: "34135fd1-ca6c-4b56-b9da-71cec39d7082",
        text: "<code>Hmm.. You don't have an age I guess</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "When testing equality, primitives are compared by their  <em>value</em> , while objects are compared by their  <em>reference</em> JavaScript checks if the objects have a reference to the same location in memory.\n\nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n\nThis is why both <code>{ age: 18 } === { age: 18 }</code>  and <code>{ age: 18 } == { age: 18 }</code>  return <code>false</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "a71cf059-5251-445c-bb55-2404e4f77033",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);\n",
    testVariants: [
      {
        id: "4e1e3134-88de-4794-b5de-830d616e6bb4",
        text: '<code>"number"</code>',
        isCorrect: false,
      },
      {
        id: "d98ecd88-1398-4204-b6f3-98ccd8a4a92d",
        text: '<code>"array"</code>',
        isCorrect: false,
      },
      {
        id: "48e276d6-d8de-41a1-bdf6-2ddfe66b156e",
        text: '<code>"object"</code>',
        isCorrect: true,
      },
      {
        id: "deb37f48-ad78-4ab1-b645-c49690ff8b4e",
        text: '<code>"NaN"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      'The rest parameter  <code>...args</code> ) lets us "collect" all remaining arguments into an array. An array is an object, so <code>typeof args</code>  returns <code>"object"</code> \n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "f187fe45-af06-4802-b9e8-756d59c63a37",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function getAge() {\n  'use strict';\n  age = 21;\n  console.log(age);\n}\n\ngetAge();\n",
    testVariants: [
      {
        id: "5c23afb9-4f7e-4705-be86-d0d429ae988b",
        text: "<code>21</code>",
        isCorrect: false,
      },
      {
        id: "03f9f916-cb82-4ba6-b2e8-17f3e1a7b511",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "cdcbe8a1-559f-44fe-b7fa-abd1c15a36ff",
        text: "<code>ReferenceError</code>",
        isCorrect: true,
      },
      {
        id: "7b738516-4334-4efa-b624-48472bc0942d",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'With <code>"use strict"</code> , you can make sure that you don\'t accidentally declare global variables. We never declared the variable <code>age</code> , and since we use <code>"use strict"</code> , it will throw a reference error. If we didn\'t use <code>"use strict"</code> , it would have worked, since the property <code>age</code>  would have gotten added to the global object.\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "5a7cd942-e748-4d3d-b261-bd3d6f655ff9",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the value of <code>sum</code> ?",
    question: "const sum = eval('10*10+5');\n",
    testVariants: [
      {
        id: "1650530b-5081-45bd-bf67-c2d45f5b1f99",
        text: "<code>105</code>",
        isCorrect: true,
      },
      {
        id: "430db09f-a024-4a42-b621-c2e74db78489",
        text: '<code>"105"</code>',
        isCorrect: false,
      },
      {
        id: "8f6ed54a-4e6e-49fc-b357-5bd0e4e013e2",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
      {
        id: "6c7bb2ee-16ed-4843-b824-261180ff6108",
        text: '<code>"10*10+5"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "<p>\n <code>eval</code>  evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is <code>10 * 10 + 5</code> This returns the number <code>105</code>\n\n</p>\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "457aed9b-dd13-46af-b95d-82a13b4c37cd",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "How long is cool <em>secret accessible?",
    question: "sessionStorage.setItem('cool</em> secret', 123);\n",
    testVariants: [
      {
        id: "eae22188-a90c-4f5f-b1fd-b1bf8d7e47c6",
        text: "Forever, the data doesn't get lost.",
        isCorrect: false,
      },
      {
        id: "fc75e8eb-5bb7-4052-b546-2aa646cfb96c",
        text: "When the user closes the tab.",
        isCorrect: true,
      },
      {
        id: "431978f2-5f97-4c9b-bc2a-83c68712d1ac",
        text: "When the user closes the entire browser, not only the tab.",
        isCorrect: false,
      },
      {
        id: "b2d1fb49-71b7-4a9b-b632-3289ecb6f9c1",
        text: "When the user shuts off their computer.",
        isCorrect: false,
      },
    ],
    explanation:
      "The data stored in <code>sessionStorage</code>  is removed after closing the  <em>tab</em>\n\nIf you used <code>localStorage</code> , the data would've been there forever, unless for example <code>localStorage.clear()</code>  is invoked.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "3adfc2f8-e41a-41c0-b9af-9574acff3e86",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "var num = 8;\nvar num = 10;\n\nconsole.log(num);\n",
    testVariants: [
      {
        id: "dd6f89b8-a44c-4fe5-bc01-b159d807684f",
        text: "<code>8</code>",
        isCorrect: false,
      },
      {
        id: "7a462bf5-fe58-4335-b142-4b150b1ac369",
        text: "<code>10</code>",
        isCorrect: true,
      },
      {
        id: "96c48d5e-fe04-40ba-bf8e-2ac91dee4992",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
      {
        id: "96333d50-3228-4c0b-b0e9-7ef294794b21",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "With the <code>var</code>  keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n\nYou cannot do this with <code>let</code>  or <code>const</code>  since they're block-scoped.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "6feec327-a27a-445e-bfc1-a39ac0af21ec",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const obj = { 1: 'a', 2: 'b', 3: 'c' };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty('1');\nobj.hasOwnProperty(1);\nset.has('1');\nset.has(1);\n",
    testVariants: [
      {
        id: "7ad2052e-cf47-40a2-b65e-da11e4de527a",
        text: "<code>false</code>  <code>true</code>  <code>false</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "66917a6e-89bc-4fc6-b511-825279fe4038",
        text: "<code>false</code>  <code>true</code>  <code>true</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "857a8e67-a9ed-4643-b9e6-de9d8cada4b1",
        text: "<code>true</code>  <code>true</code>  <code>false</code>  <code>true</code>",
        isCorrect: true,
      },
      {
        id: "ab67efdc-0554-49a1-b2f5-6701d614bc5e",
        text: "<code>true</code>  <code>true</code>  <code>true</code>  <code>true</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why <code>obj.hasOwnProperty('1')</code>  also returns true.\n\nIt doesn't work that way for a set. There is no <code>'1'</code>  in our set: <code>set.has('1')</code>  returns <code>false</code> It has the numeric type <code>1</code> , <code>set.has(1)</code>  returns <code>true</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "c447cca7-e811-407a-b959-04f1824326fc",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const obj = { a: 'one', b: 'two', a: 'three' };\nconsole.log(obj);\n",
    testVariants: [
      {
        id: "c7081ed1-e55c-40ff-b6a7-0f877314c663",
        text: '<code>{ a: "one", b: "two" }</code>',
        isCorrect: false,
      },
      {
        id: "2e64b25e-3416-4f9d-bbf3-e33dd698708c",
        text: '<code>{ b: "two", a: "three" }</code>',
        isCorrect: false,
      },
      {
        id: "aed46939-f331-478d-b408-82ebe0b3a673",
        text: '<code>{ a: "three", b: "two" }</code>',
        isCorrect: true,
      },
      {
        id: "ea4f090d-185a-4661-bdc0-7bff528ac5e4",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "3d6ddcb1-a1cc-412a-b0a4-4349118e387d",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "for (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}\n",
    testVariants: [
      {
        id: "d3d1f448-9d55-4797-bbec-f6f9ee2cf283",
        text: "<code>1</code>  <code>2</code>",
        isCorrect: false,
      },
      {
        id: "e0af4d15-5a86-4f66-b4fd-e4237048e3ea",
        text: "<code>1</code>  <code>2</code>  <code>3</code>",
        isCorrect: false,
      },
      {
        id: "34008a5c-feec-461c-b86c-83a9b06f67ca",
        text: "<code>1</code>  <code>2</code>  <code>4</code>",
        isCorrect: true,
      },
      {
        id: "37b2696e-e5a8-4ea5-b702-c60bfa6077ea",
        text: "<code>1</code>  <code>3</code>  <code>4</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "The <code>continue</code>  statement skips an iteration if a certain condition returns <code>true</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "3b62d424-20ec-4c46-bc4d-842d5bf16a45",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "String.prototype.giveLydiaPizza = () => {\n  return 'Just give Lydia pizza already!';\n};\n\nconst name = 'Lydia';\n\nname.giveLydiaPizza();\n",
    testVariants: [
      {
        id: "881a34e1-b891-4d09-bbb3-3933c5a3f635",
        text: '<code>"Just give Lydia pizza already!"</code>',
        isCorrect: true,
      },
      {
        id: "780f5de5-69ad-4eab-babd-e9ae7b6815b6",
        text: "<code>TypeError: not a function</code>",
        isCorrect: false,
      },
      {
        id: "c2869445-b7a1-42a0-b60c-6ed5f6f6e3ad",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
      {
        id: "cd3535ca-9264-400b-b6ba-f5fbe99e17a6",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "<p>\n <code>String</code>  is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!\n\n</p>\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "4766a9a7-7f43-4aed-b76b-7a779708e5ec",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);\n",
    testVariants: [
      {
        id: "6ae48004-794d-49b3-b4f9-efbde542694f",
        text: "<code>123</code>",
        isCorrect: false,
      },
      {
        id: "97e721dc-814e-4332-ba54-273d4fcd1ec7",
        text: "<code>456</code>",
        isCorrect: true,
      },
      {
        id: "ed5ca8b5-1ba9-48d8-b2f0-f940709c286d",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "17970071-9e5c-4d2b-b91c-6a988fee4bf1",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'Object keys are automatically converted into strings. We are trying to set an object as a key to object <code>a</code> , with the value of <code>123</code>\n\nHowever, when we stringify an object, it becomes <code>"[object Object]"</code> So what we are saying here, is that <code>a["[object Object]"] = 123</code> Then, we can try to do the same again. <code>c</code>  is another object that we are implicitly stringifying. So then, <code>a["[object Object]"] = 456</code>\n\nThen, we log <code>a[b]</code> , which is actually <code>a["[object Object]"]</code> We just set that to <code>456</code> , so it returns <code>456</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "b7885dac-2738-413e-b9b5-fc932f1fc346",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const foo = () => console.log('First');\nconst bar = () => setTimeout(() => console.log('Second'));\nconst baz = () => console.log('Third');\n\nbar();\nfoo();\nbaz();\n",
    testVariants: [
      {
        id: "edf5ed40-71eb-4c32-b84f-9202650c092e",
        text: "<code>First</code>  <code>Second</code>  <code>Third</code>",
        isCorrect: false,
      },
      {
        id: "78c66a7c-a90f-457e-b7bf-92ddc88b4f0b",
        text: "<code>First</code>  <code>Third</code>  <code>Second</code>",
        isCorrect: true,
      },
      {
        id: "00ca43ee-3322-41b2-b7df-a9e5e0c5c3ed",
        text: "<code>Second</code>  <code>First</code>  <code>Third</code>",
        isCorrect: false,
      },
      {
        id: "60fd8683-a48f-4cc7-bd16-783f614aac48",
        text: "<code>Second</code>  <code>Third</code>  <code>First</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'We have a <code>setTimeout</code>  function and invoked it first. Yet, it was logged last.\n\nThis is because in browsers, we don\'t just have the runtime engine, we also have something called a <code>WebAPI</code> The <code>WebAPI</code>  gives us the <code>setTimeout</code>  function to start with, and for example the DOM.\n\nAfter the  <em>callback</em>  is pushed to the WebAPI, the <code>setTimeout</code>  function itself (but not the callback!) is popped off the stack.\n\n<img src="https://i.imgur.com/X5wsHOg.png" width="200">\n\nNow, <code>foo</code>  gets invoked, and <code>"First"</code>  is being logged.\n\n<img src="https://i.imgur.com/Pvc0dGq.png" width="200">\n <code>foo</code>  is popped off the stack, and <code>baz</code>  gets invoked. <code>"Third"</code>  gets logged.\n\n<img src="https://i.imgur.com/WhA2bCP.png" width="200">\n\nThe WebAPI can\'t just add stuff to the stack whenever it\'s ready. Instead, it pushes the callback function to something called the  <em>queue</em>\n\n<img src="https://i.imgur.com/NSnDZmU.png" width="200">\n\nThis is where an event loop starts to work. An  <strong>event loop</strong>  looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.\n\n<img src="https://i.imgur.com/uyiScAI.png" width="200">\n <code>bar</code>  gets invoked, <code>"Second"</code>  gets logged, and it\'s popped off the stack.\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "91eeb442-fbc2-4078-b847-825761c693b5",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What is the event.target when clicking the button?",
    question:
      "<div onclick=\"console.log('first div')\">\n  <div onclick=\"console.log('second div')\">\n    <button onclick=\"console.log('button')\">\n      Click!\n    </button>\n  </div>\n</div>\n",
    testVariants: [
      {
        id: "8ca24caf-b734-47df-b199-5fef88cdc97f",
        text: "Outer <code>div</code>",
        isCorrect: false,
      },
      {
        id: "36570ca4-35a2-46a7-b4d1-c14ce2dc2a20",
        text: "Inner <code>div</code>",
        isCorrect: false,
      },
      {
        id: "b6a341c0-0945-4381-b32d-aac389a2d755",
        text: "<code>button</code>",
        isCorrect: true,
      },
      {
        id: "b244aae4-1ef1-4b96-b3cd-f5499f938713",
        text: "An array of all nested elements.",
        isCorrect: false,
      },
    ],
    explanation:
      "The deepest nested element that caused the event is the target of the event. You can stop bubbling by <code>event.stopPropagation</code> \n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "a3b7d793-a3f8-4459-bfff-b8415f3c5cc4",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "When you click the paragraph, what's the logged output?",
    question:
      "<div onclick=\"console.log('div')\">\n  <p onclick=\"console.log('p')\">\n    Click here!\n  </p>\n</div>\n",
    testVariants: [
      {
        id: "509f92e7-9795-43ee-b866-2d4bde45ce29",
        text: "<code>p</code>  <code>div</code>",
        isCorrect: true,
      },
      {
        id: "0df0d1fc-3575-41ae-b2c2-e5ce18a5f038",
        text: "<code>div</code>  <code>p</code>",
        isCorrect: false,
      },
      {
        id: "eaf96b38-0792-429e-bb66-9b202b89555a",
        text: "<code>p</code>",
        isCorrect: false,
      },
      {
        id: "d782f3fb-a0b7-466b-b409-863ca1d1e330",
        text: "<code>div</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "If we click <code>p</code> , we see two logs: <code>p</code>  and <code>div</code> During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set <code>useCapture</code>  to <code>true</code> ). It goes from the deepest nested element outwards.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "f358e7d7-7ed2-4c94-b209-a7765bf8bb48",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const person = { name: 'Lydia' };\n\nfunction sayHi(age) {\n  return <code>${this.name} is ${age}</code> ;\n}\n\nconsole.log(sayHi.call(person, 21));\nconsole.log(sayHi.bind(person, 21));\n",
    testVariants: [
      {
        id: "b14311b0-98bc-485b-bf29-358a538995a6",
        text: "<code>undefined is 21</code>  <code>Lydia is 21</code>",
        isCorrect: false,
      },
      {
        id: "76be61e7-16da-4be5-bea8-b9c97b0ce497",
        text: "<code>function</code>  <code>function</code>",
        isCorrect: false,
      },
      {
        id: "94b8cec9-7f7c-49e5-bc6b-9bc2d973799d",
        text: "<code>Lydia is 21</code>  <code>Lydia is 21</code>",
        isCorrect: false,
      },
      {
        id: "cd3895a3-cd26-4716-be52-f3568a45f44c",
        text: "<code>Lydia is 21</code>  <code>function</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "With both, we can pass the object to which we want the <code>this</code>  keyword to refer to. However, <code>.call</code>  is also  <em>executed immediately</em> !\n <code>.bind.</code>  returns a  <em>copy</em>  of the function, but with a bound context! It is not executed immediately.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "31f2175e-ddfc-4803-bfe9-d970755e9be7",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());\n",
    testVariants: [
      {
        id: "ad2c09ef-54c7-46f7-b58f-31ae86575de7",
        text: '<code>"object"</code>',
        isCorrect: false,
      },
      {
        id: "0efc02dd-79a5-480b-bc77-6d5da0272d3d",
        text: '<code>"number"</code>',
        isCorrect: true,
      },
      {
        id: "59bac8e0-e242-49df-ba34-12305024b638",
        text: '<code>"function"</code>',
        isCorrect: false,
      },
      {
        id: "99a3adbd-b352-40d8-b96f-7bfecadec163",
        text: '<code>"undefined"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      'The <code>sayHi</code>  function returns the returned value of the immediately invoked function expression (IIFE). This function returned <code>0</code> , which is type <code>"number"</code>\n\nFYI: there are only 7 built-in types: <code>null</code> , <code>undefined</code> , <code>boolean</code> , <code>number</code> , <code>string</code> , <code>object</code> , and <code>symbol</code> <code>"function"</code>  is not a type, since functions are objects, it\'s of type <code>"object"</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "cbab85f0-255a-4026-b9d7-091ab3db1c47",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "Which of these values are falsy?",
    question:
      "0;\nnew Number(0);\n('');\n(' ');\nnew Boolean(false);\nundefined;\n",
    testVariants: [
      {
        id: "09a0d852-6530-409b-bce9-7121b2adf01d",
        text: "<code>0</code> , <code>''</code> , <code>undefined</code>",
        isCorrect: true,
      },
      {
        id: "3ac4e518-8926-42f0-b034-da146c44f750",
        text: "<code>0</code> , <code>new Number(0)</code> , <code>''</code> , <code>new Boolean(false)</code> , <code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "e3be4920-8ada-4677-b45c-2935ef07097e",
        text: "<code>0</code> , <code>''</code> , <code>new Boolean(false)</code> , <code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "39eeb940-593f-44f6-b359-7e71ca20fd30",
        text: "All of them are falsy",
        isCorrect: false,
      },
    ],
    explanation:
      "There are 8 falsy values:\n\n- <code>undefined</code> \n- <code>null</code> \n- <code>NaN</code> \n- <code>false</code> \n- <code>''</code>  (empty string)\n- <code>0</code> \n- <code>-0</code> \n- <code>0n</code>  (BigInt(0))\n\nFunction constructors, like <code>new Number</code>  and <code>new Boolean</code>  are truthy.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "f3633f0b-67c0-4b4a-b7eb-eed7546e6fdb",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "console.log(typeof typeof 1);\n",
    testVariants: [
      {
        id: "63266e4f-c405-4350-b82f-36535e7f9592",
        text: '<code>"number"</code>',
        isCorrect: false,
      },
      {
        id: "c07cdeba-8b19-460c-bc50-07f833fe2597",
        text: '<code>"string"</code>',
        isCorrect: true,
      },
      {
        id: "f0057945-f475-4b10-b0e5-d0c529c03819",
        text: '<code>"object"</code>',
        isCorrect: false,
      },
      {
        id: "94afe858-268b-4f23-bb4f-6f10846cc4b0",
        text: '<code>"undefined"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      '<p>\n <code>typeof 1</code>  returns <code>"number"</code> <code>typeof "number"</code>  returns <code>"string"</code> \n\n</p>\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "6b97eb9a-02da-4bc6-b4ee-3c1a19ddd7e8",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);\n",
    testVariants: [
      {
        id: "c4f152ee-39f2-4cfb-b502-d105eadacaa8",
        text: "<code>[1, 2, 3, 7 x null, 11]</code>",
        isCorrect: false,
      },
      {
        id: "a3980d13-cf41-4d77-b8c1-a3d946dda03b",
        text: "<code>[1, 2, 3, 11]</code>",
        isCorrect: false,
      },
      {
        id: "0ce18b98-4f9b-4f1e-b5b5-e7c4c4053a39",
        text: "<code>[1, 2, 3, 7 x empty, 11]</code>",
        isCorrect: true,
      },
      {
        id: "02c4ee43-eefb-4e02-be7b-bc3ceb9e0ca4",
        text: "<code>SyntaxError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of <code>undefined</code> , but you will see something like:\n <code>[1, 2, 3, 7 x empty, 11]</code> \n\ndepending on where you run it (it\'s different for every browser, node, etc.)\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "432bca09-c7a1-42e9-b30e-11acbb1347e9",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();\n",
    testVariants: [
      {
        id: "ef1501d4-1d3b-4321-b2bd-4ddbe75cff37",
        text: "<code>1</code>  <code>undefined</code>  <code>2</code>",
        isCorrect: true,
      },
      {
        id: "e7350812-a9c6-48cb-b80a-625ffd8e06a8",
        text: "<code>undefined</code>  <code>undefined</code>  <code>undefined</code>",
        isCorrect: false,
      },
      {
        id: "78258770-71bd-4610-b374-956f4f2ec59f",
        text: "<code>1</code>  <code>1</code>  <code>2</code>",
        isCorrect: false,
      },
      {
        id: "4be78f78-1ddf-4c5b-b620-08ad805aaa3b",
        text: "<code>1</code>  <code>undefined</code>  <code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "The <code>catch</code>  block receives the argument <code>x</code> This is not the same <code>x</code>  as the variable when we pass arguments. This variable <code>x</code>  is block-scoped.\n\nLater, we set this block-scoped variable equal to <code>1</code> , and set the value of the variable <code>y</code> Now, we log the block-scoped variable <code>x</code> , which is equal to <code>1</code>\n\nOutside of the <code>catch</code>  block, <code>x</code>  is still <code>undefined</code> , and <code>y</code>  is <code>2</code> When we want to <code>console.log(x)</code>  outside of the <code>catch</code>  block, it returns <code>undefined</code> , and <code>y</code>  returns <code>2</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "7347d168-0237-4abc-b994-52b9a12d8d6c",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "[[0, 1], [2, 3]].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2],\n);\n",
    testVariants: [
      {
        id: "58097abf-3c7e-49d6-bd72-e81b409f8e84",
        text: "<code>[0, 1, 2, 3, 1, 2]</code>",
        isCorrect: false,
      },
      {
        id: "ef6a6903-7492-49b7-b6a3-7fbca329b19d",
        text: "<code>[6, 1, 2]</code>",
        isCorrect: false,
      },
      {
        id: "38d911e7-0107-4eb6-b72d-6f5d39a9c90b",
        text: "<code>[1, 2, 0, 1, 2, 3]</code>",
        isCorrect: true,
      },
      {
        id: "c7c473ed-6df3-4dfa-bcc3-82a093be7953",
        text: "<code>[1, 2, 6]</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "<p>\n <code>[1, 2]</code>  is our initial value. This is the value we start with, and the value of the very first <code>acc</code> During the first round, <code>acc</code>  is <code>[1,2]</code> , and <code>cur</code>  is <code>[0, 1]</code> We concatenate them, which results in <code>[1, 2, 0, 1]</code>\n\nThen, <code>[1, 2, 0, 1]</code>  is <code>acc</code>  and <code>[2, 3]</code>  is <code>cur</code> We concatenate them, and get <code>[1, 2, 0, 1, 2, 3]</code> \n\n</p>\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "0bdb51af-464f-4976-b28f-f5985384b72f",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "!!null;\n!!'';\n!!1;\n",
    testVariants: [
      {
        id: "b7e38ffc-8751-4253-b075-9bd193814704",
        text: "<code>false</code>  <code>true</code>  <code>false</code>",
        isCorrect: false,
      },
      {
        id: "0a6a39ec-a169-48d6-bdc3-c2ab8729aa19",
        text: "<code>false</code>  <code>false</code>  <code>true</code>",
        isCorrect: true,
      },
      {
        id: "fba86ff0-be8f-41b3-b581-537346adb96d",
        text: "<code>false</code>  <code>true</code>  <code>true</code>",
        isCorrect: false,
      },
      {
        id: "6d8fa328-d0ca-463a-b584-5f85c602b89d",
        text: "<code>true</code>  <code>true</code>  <code>false</code>",
        isCorrect: false,
      },
    ],
    explanation:
      '<p>\n <code>null</code>  is falsy. <code>!null</code>  returns <code>true</code> <code>!true</code>  returns <code>false</code>\n <code>""</code>  is falsy. <code>!""</code>  returns <code>true</code> <code>!true</code>  returns <code>false</code>\n <code>1</code>  is truthy. <code>!1</code>  returns <code>false</code> <code>!false</code>  returns <code>true</code>\n\n</p>\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "5dea9e8f-6fad-4c65-b50b-66f94c65d6d3",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header:
      "What does the <code>setInterval</code>  method return in the browser?",
    question: "setInterval(() => console.log('Hi'), 1000);\n",
    testVariants: [
      {
        id: "715604cf-3f29-45fb-bc1b-b4a105abc13b",
        text: "a unique id",
        isCorrect: true,
      },
      {
        id: "ee89b898-03c4-4d4e-bb2f-6de4f77feaa7",
        text: "the amount of milliseconds specified",
        isCorrect: false,
      },
      {
        id: "30da3e69-b03f-45b9-bc0d-33fdc3900974",
        text: "the passed function",
        isCorrect: false,
      },
      {
        id: "cb5b6767-544b-44c0-b9a4-e197de398ce6",
        text: "<code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "It returns a unique id. This id can be used to clear that interval with the <code>clearInterval()</code>  function.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "9d81b91b-ba2a-4e6e-bdbf-8679fca9724c",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What does this return?",
    question: "[...'Lydia'];\n",
    testVariants: [
      {
        id: "4a5ddd92-4573-45f3-b989-4b196f24c09a",
        text: '<code>["L", "y", "d", "i", "a"]</code>',
        isCorrect: true,
      },
      {
        id: "24d9a787-57bd-4b06-b847-aa0bdfa37415",
        text: '<code>["Lydia"]</code>',
        isCorrect: false,
      },
      {
        id: "8bac41c0-ff8f-44a8-b95c-ac4cdd309bb2",
        text: '<code>[[], "Lydia"]</code>',
        isCorrect: false,
      },
      {
        id: "567d05e3-7b2d-40bb-b117-46c26764276f",
        text: '<code>[["L", "y", "d", "i", "a"]]</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "A string is an iterable. The spread operator maps every character of an iterable to one element.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "bba8ef4b-6559-4583-bfe2-4fbb036cdcf6",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function* generator(i) {\n  yield i;\n  yield i * 2;\n}\n\nconst gen = generator(10);\n\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n",
    testVariants: [
      {
        id: "33298844-4ab6-4b74-b8ff-573fe3c4dd50",
        text: "<code>[0, 10], [10, 20]</code>",
        isCorrect: false,
      },
      {
        id: "55b6df8a-bd38-46fb-be1f-1d775f11d32c",
        text: "<code>20, 20</code>",
        isCorrect: false,
      },
      {
        id: "a61a4944-6dcb-4414-b7bc-c73c9b4d5f3a",
        text: "<code>10, 20</code>",
        isCorrect: true,
      },
      {
        id: "56a5c499-5837-49c8-bd14-018205c05e43",
        text: "<code>0, 10 and 10, 20</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a <code>yield</code>  keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t  <em>return</em>  the value, it  <em>yields</em>  the value.\n\nFirst, we initialize the generator function with <code>i</code>  equal to <code>10</code> We invoke the generator function using the <code>next()</code>  method. The first time we invoke the generator function, <code>i</code>  is equal to <code>10</code> It encounters the first <code>yield</code>  keyword: it yields the value of <code>i</code> The generator is now "paused", and <code>10</code>  gets logged.\n\nThen, we invoke the function again with the <code>next()</code>  method. It starts to continue where it stopped previously, still with <code>i</code>  equal to <code>10</code> Now, it encounters the next <code>yield</code>  keyword, and yields <code>i * 2</code> <code>i</code>  is equal to <code>10</code> , so it returns <code>10 * 2</code> , which is <code>20</code> This results in <code>10, 20</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "5674c65a-259f-46a9-bcbd-d5d9dae9b103",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What does this return?",
    question:
      "const firstPromise = new Promise((res, rej) => {\n  setTimeout(res, 500, 'one');\n});\n\nconst secondPromise = new Promise((res, rej) => {\n  setTimeout(res, 100, 'two');\n});\n\nPromise.race([firstPromise, secondPromise]).then(res => console.log(res));\n",
    testVariants: [
      {
        id: "07e70197-0081-4dd8-b8e6-7031eb4fc18d",
        text: '<code>"one"</code>',
        isCorrect: false,
      },
      {
        id: "30a2888f-4511-40a1-bf61-b4f2c2edddec",
        text: '<code>"two"</code>',
        isCorrect: true,
      },
      {
        id: "b03c436b-c6f8-4ece-bf39-4a39c454cddd",
        text: '<code>"two" "one"</code>',
        isCorrect: false,
      },
      {
        id: "4ddcadec-5167-4839-b467-d04e8b3e5c2e",
        text: '<code>"one" "two"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "When we pass multiple promises to the <code>Promise.race</code>  method, it resolves/rejects the  <em>first</em>  promise that resolves/rejects. To the <code>setTimeout</code>  method, we pass a timer: 500ms for the first promise  <code>firstPromise</code> ), and 100ms for the second promise  <code>secondPromise</code> ). This means that the <code>secondPromise</code>  resolves first with the value of <code>'two'</code> <code>res</code>  now holds the value of <code>'two'</code> , which gets logged.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "7096fca1-986b-4a08-bbe1-48a2eb0be09a",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "let person = { name: 'Lydia' };\nconst members = [person];\nperson = null;\n\nconsole.log(members);\n",
    testVariants: [
      {
        id: "29744d42-2d29-43e0-ba0a-5a737ebe206a",
        text: "<code>null</code>",
        isCorrect: false,
      },
      {
        id: "74e9b2a5-b0ca-4375-bc3a-0559385a94ba",
        text: "<code>[null]</code>",
        isCorrect: false,
      },
      {
        id: "d37cac91-ad35-49db-bebc-31020daf7619",
        text: "<code>[{}]</code>",
        isCorrect: false,
      },
      {
        id: "ed344154-51a5-464a-ba12-8b574dc33e0c",
        text: '<code>[{ name: "Lydia" }]</code>',
        isCorrect: true,
      },
    ],
    explanation:
      'First, we declare a variable <code>person</code>  with the value of an object that has a <code>name</code>  property.\n\n<img src="https://i.imgur.com/TML1MbS.png" width="200">\n\nThen, we declare a variable called <code>members</code> We set the first element of that array equal to the value of the <code>person</code>  variable. Objects interact by  <em>reference</em>  when setting them equal to each other. When you assign a reference from one variable to another, you make a  <em>copy</em>  of that reference. (note that they don\'t have the  <em>same</em>  reference!)\n\n<img src="https://i.imgur.com/FSG5K3F.png" width="300">\n\nThen, we set the variable <code>person</code>  equal to <code>null</code>\n\n<img src="https://i.imgur.com/sYjcsMT.png" width="300">\n\nWe are only modifying the value of the <code>person</code>  variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in <code>members</code>  still holds its reference to the original object. When we log the <code>members</code>  array, the first element still holds the value of the object, which gets logged.\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "b3e0b90d-4fc2-4a3b-b9c0-67923a7156bd",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nfor (const item in person) {\n  console.log(item);\n}\n",
    testVariants: [
      {
        id: "2a7d0737-1581-4f39-b0f0-c0a38aca190e",
        text: '<code>{ name: "Lydia" }, { age: 21 }</code>',
        isCorrect: false,
      },
      {
        id: "a1707abc-1fd8-4895-b5d4-7f75ebb2474e",
        text: '<code>"name", "age"</code>',
        isCorrect: true,
      },
      {
        id: "5a771be7-0fb7-475e-b234-9d5ecd571c08",
        text: '<code>"Lydia", 21</code>',
        isCorrect: false,
      },
      {
        id: "7dae9c60-5a4c-4296-b397-17c75c03a595",
        text: '<code>["name", "Lydia"], ["age", 21]</code>',
        isCorrect: false,
      },
    ],
    explanation:
      "With a <code>for-in</code>  loop, we can iterate through object keys, in this case <code>name</code>  and <code>age</code> Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of <code>item</code>  equal to the current key it’s iterating over. First, <code>item</code>  is equal to <code>name</code> , and gets logged. Then, <code>item</code>  is equal to <code>age</code> , which gets logged.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "9b8925fc-368c-450b-bdd6-f752bcc37295",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "console.log(3 + 4 + '5');\n",
    testVariants: [
      {
        id: "06dce994-3f89-46e5-b899-db8e763ceea6",
        text: '<code>"345"</code>',
        isCorrect: false,
      },
      {
        id: "9ab761be-2365-4568-b4a1-f5bd4889094a",
        text: '<code>"75"</code>',
        isCorrect: true,
      },
      {
        id: "afe18e96-8cca-43b2-b98a-d7aa334a860d",
        text: "<code>12</code>",
        isCorrect: false,
      },
      {
        id: "d328ac93-9351-476e-b4c5-74b2fff22a91",
        text: '<code>"12"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      'Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the  <em>same</em>  precedence. We only have one type of operator: <code>+</code> For addition, the associativity is left-to-right.\n <code>3 + 4</code>  gets evaluated first. This results in the number <code>7</code>\n <code>7 + \'5\'</code>  results in <code>"75"</code>  because of coercion. JavaScript converts the number <code>7</code>  into a string, see question 15. We can concatenate two strings using the <code>+</code> operator. <code>"7" + "5"</code>  results in <code>"75"</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "b40d73cf-dd88-4bab-b384-208b2226a9c1",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the value of <code>num</code> ?",
    question: "const num = parseInt('7*6', 10);\n",
    testVariants: [
      {
        id: "85d3d079-eca5-4a9d-b6e7-c1a28919615d",
        text: "<code>42</code>",
        isCorrect: false,
      },
      {
        id: "73629333-b034-4ebf-b114-24735efa0596",
        text: '<code>"42"</code>',
        isCorrect: false,
      },
      {
        id: "2b54e056-bd5d-4357-bc80-b2d3391fd0d4",
        text: "<code>7</code>",
        isCorrect: true,
      },
      {
        id: "9275ad33-3f05-43d7-b713-4a40072abbd5",
        text: "<code>NaN</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'Only the first numbers in the string is returned. Based on the  <em>radix</em>  (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the <code>parseInt</code>  checks whether the characters in the string are valid. Once it encounters a character that isn\'t a valid number in the radix, it stops parsing and ignores the following characters.\n <code>*</code>  is not a valid number. It only parses <code>"7"</code>  into the decimal <code>7</code> <code>num</code>  now holds the value of <code>7</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "236e9120-36f6-462b-bcc9-cbd633addaa9",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "[1, 2, 3].map(num => {\n  if (typeof num === 'number') return;\n  return num * 2;\n});\n",
    testVariants: [
      {
        id: "b3a64cc7-dd19-40e3-b091-ddac2936a5fe",
        text: "<code>[]</code>",
        isCorrect: false,
      },
      {
        id: "f9e35933-56af-4476-b43d-f5432f880f83",
        text: "<code>[null, null, null]</code>",
        isCorrect: false,
      },
      {
        id: "86bc8f9f-8af4-4bd3-b568-cde41c8192f5",
        text: "<code>[undefined, undefined, undefined]</code>",
        isCorrect: true,
      },
      {
        id: "b4583496-1c73-4dda-bf23-2202d723b9aa",
        text: "<code>[ 3 x empty ]</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'When mapping over the array, the value of <code>num</code>  is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement <code>typeof num === "number"</code>  returns <code>true</code> The map function creates a new array and inserts the values returned from the function.\n\nHowever, we don’t return a value. When we don’t return a value from the function, the function returns <code>undefined</code> For every element in the array, the function block gets called, so for each element we return <code>undefined</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "ab7dd5d0-edcb-480d-bd41-1668b93f3bcf",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function getInfo(member, year) {\n  member.name = 'Lydia';\n  year = '1998';\n}\n\nconst person = { name: 'Sarah' };\nconst birthYear = '1997';\n\ngetInfo(person, birthYear);\n\nconsole.log(person, birthYear);\n",
    testVariants: [
      {
        id: "99fc45fc-6db9-40ee-b599-6d5246b5bb00",
        text: '<code>{ name: "Lydia" }, "1997"</code>',
        isCorrect: true,
      },
      {
        id: "c02b96a7-573b-4240-befa-1e3087a32e12",
        text: '<code>{ name: "Sarah" }, "1998"</code>',
        isCorrect: false,
      },
      {
        id: "4bc12d6f-2946-4428-bff8-0b41141dfa11",
        text: '<code>{ name: "Lydia" }, "1998"</code>',
        isCorrect: false,
      },
      {
        id: "66018666-7281-4bed-b80a-8fb9c37804b0",
        text: '<code>{ name: "Sarah" }, "1997"</code>',
        isCorrect: false,
      },
    ],
    explanation:
      'Arguments are passed by  <em>value</em> , unless their value is an object, then they\'re passed by  <em>reference</em> <code>birthYear</code>  is passed by value, since it\'s a string, not an object. When we pass arguments by value, a  <em>copy</em>  of that value is created (see question 46).\n\nThe variable <code>birthYear</code>  has a reference to the value <code>"1997"</code> The argument <code>year</code>  also has a reference to the value <code>"1997"</code> , but it\'s not the same value as <code>birthYear</code>  has a reference to. When we update the value of <code>year</code>  by setting <code>year</code>  equal to <code>"1998"</code> , we are only updating the value of <code>year</code> <code>birthYear</code>  is still equal to <code>"1997"</code>\n\nThe value of <code>person</code>  is an object. The argument <code>member</code>  has a (copied) reference to the  <em>same</em>  object. When we modify a property of the object <code>member</code>  has a reference to, the value of <code>person</code>  will also be modified, since they both have a reference to the same object. <code>person</code> \'s <code>name</code>  property is now equal to the value <code>"Lydia"</code> \n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  // {
  //   id: "78626acc-7ad8-4a8f-b362-6c984c2b1a15",
  //   codeLanguage: "javascript",
  //   questionModel: "quiz",
  //   header: "What's the output?",
  //   question:
  //     "function greeting() {\n  throw 'Hello world!';\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();\n    console.log('It worked!', data);\n  } catch (e) {\n    console.log('Oh no an error:', e);\n  }\n}\n\nsayHi();\n",
  //   testVariants: [
  //     {
  //       id: "0eac69ab-80b0-4996-b33e-87beb9d9a157",
  //       text: "<code>It worked! Hello world!</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "ae69a6be-e00f-424d-b13c-65060f21305a",
  //       text: "<code>Oh no an error: undefined</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "d395e79b-6b88-4d28-bf08-66de775dd1a0",
  //       text: "<code>SyntaxError: can only throw Error objects</code>",
  //       isCorrect: false,
  //     },
  //     {
  //       id: "8e2c81c0-9198-410f-b4a7-06213d48492a",
  //       text: "<code>Oh no an error: Hello world!</code>",
  //       isCorrect: true,
  //     },
  //   ],
  //   explanation:
  //     "With the <code>throw</code>  statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string <code>'Hello world!'</code>\n\nWith the <code>catch</code>  statement, we can specify what to do if an exception is thrown in the <code>try</code>  block. An exception is thrown: the string <code>'Hello world!'</code> <code>e</code>  is now equal to that string, which we log. This results in <code>'Oh an error: Hello world!'</code>\n\n\n",
  //   watched: false,
  //   isMarked: false,
  //   rate: 0,
  // },
  {
    id: "6d5733a5-370a-4837-b7b7-cacc2442166e",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "function Car() {\n  this.make = 'Lamborghini';\n  return { make: 'Maserati' };\n}\n\nconst myCar = new Car();\nconsole.log(myCar.make);\n",
    testVariants: [
      {
        id: "7ac346cc-5c47-41e7-b2a2-3d0db9aa40c5",
        text: '<code>"Lamborghini"</code>',
        isCorrect: false,
      },
      {
        id: "559e14ef-718a-4895-bb59-f9a4c5eae91c",
        text: '<code>"Maserati"</code>',
        isCorrect: true,
      },
      {
        id: "11726dcf-6f49-4e95-b672-455c69ed6160",
        text: "<code>ReferenceError</code>",
        isCorrect: false,
      },
      {
        id: "235d6c87-0479-4d29-b2f6-fcabc686230d",
        text: "<code>TypeError</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'When you return a property, the value of the property is equal to the  <em>returned</em>  value, not the value set in the constructor function. We return the string <code>"Maserati"</code> , so <code>myCar.make</code>  is equal to <code>"Maserati"</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  // {
  //   id: "552df4b1-c93a-4a35-ba6a-8d5c38dbe949",
  //   codeLanguage: "javascript",
  //   questionModel: "quiz",
  //   header: "What's the output?",
  //   question:
  //     "(() => {\n  let x = (y = 10);\n})();\n\nconsole.log(typeof x);\nconsole.log(typeof y);\n",
  //   testVariants: [
  //     {
  //       id: "125730c3-2de3-4dc7-b58e-a558d2bf9946",
  //       text: '<code>"undefined", "number"</code>',
  //       isCorrect: true,
  //     },
  //     {
  //       id: "5abf88f2-9d00-4e8d-bf2c-e8344a08a5f1",
  //       text: '<code>"number", "number"</code>',
  //       isCorrect: false,
  //     },
  //     {
  //       id: "3383e508-3237-4d89-bd16-0fbc7dd4e479",
  //       text: '<code>"object", "number"</code>',
  //       isCorrect: false,
  //     },
  //     {
  //       id: "58cfcefa-6526-4686-ba6c-b5c2fd239242",
  //       text: '<code>"number", "undefined"</code>',
  //       isCorrect: false,
  //     },
  //   ],
  //   explanation:
  //     '<p>\n <code>let x = (y = 10);</code>  is actually shorthand for:\n\n```javascript\ny = 10;\nlet x = y;\n```\n\nWhen we set <code>y</code>  equal to <code>10</code> , we actually add a property <code>y</code>  to the global object  <code>window</code>  in browser, <code>global</code>  in Node). In a browser, <code>window.y</code>  is now equal to <code>10</code>\n\nThen, we declare a variable <code>x</code>  with the value of <code>y</code> , which is <code>10</code> Variables declared with the <code>let</code>  keyword are  <em>block scoped</em> , they are only defined within the block they\'re declared in; the immediately invoked function expression (IIFE) in this case. When we use the <code>typeof</code>  operator, the operand <code>x</code>  is not defined: we are trying to access <code>x</code>  outside of the block it\'s declared in. This means that <code>x</code>  is not defined. Values who haven\'t been assigned a value or declared are of type <code>"undefined"</code> <code>console.log(typeof x)</code>  returns <code>"undefined"</code>\n\nHowever, we created a global variable <code>y</code>  when setting <code>y</code>  equal to <code>10</code> This value is accessible anywhere in our code. <code>y</code>  is defined, and holds a value of type <code>"number"</code> <code>console.log(typeof y)</code>  returns <code>"number"</code>\n\n</p>\n',
  //   watched: false,
  //   isMarked: false,
  //   rate: 0,
  // },
  // {
  //   id: "41405c8b-76a6-4bf3-b229-17c0e04afaec",
  //   codeLanguage: "javascript",
  //   questionModel: "quiz",
  //   header: "What's the output?",
  //   question:
  //     "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nDog.prototype.bark = function() {\n  console.log <code>Woof I am ${this.name}</code> );\n};\n\nconst pet = new Dog('Mara');\n\npet.bark();\n\ndelete Dog.prototype.bark;\n\npet.bark();\n",
  //   testVariants: [
  //     {
  //       id: "3f38ce43-35a1-4b23-b397-fd55596b7341",
  //       text: '<code>"Woof I am Mara"</code> , <code>TypeError</code>',
  //       isCorrect: true,
  //     },
  //     {
  //       id: "b28939fb-49be-4159-b0d3-a94e5f09c8aa",
  //       text: '<code>"Woof I am Mara"</code> , <code>"Woof I am Mara"</code>',
  //       isCorrect: false,
  //     },
  //     {
  //       id: "15aba125-8e4a-468a-b45c-ee7e514139db",
  //       text: '<code>"Woof I am Mara"</code> , <code>undefined</code>',
  //       isCorrect: false,
  //     },
  //     {
  //       id: "31b14abd-c309-4f8a-b1c3-c41c2c1fca08",
  //       text: "<code>TypeError</code> , <code>TypeError</code>",
  //       isCorrect: false,
  //     },
  //   ],
  //   explanation:
  //     "We can delete properties from objects using the <code>delete</code>  keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the <code>bark</code>  function is not available anymore on the prototype after <code>delete Dog.prototype.bark</code> , yet we still try to access it.\n\nWhen we try to invoke something that is not a function, a <code>TypeError</code>  is thrown. In this case <code>TypeError: pet.bark is not a function</code> , since <code>pet.bark</code>  is <code>undefined</code>\n\n\n",
  //   watched: false,
  //   isMarked: false,
  //   rate: 0,
  // },
  {
    id: "5d9e87ef-5134-4a57-bcaa-9e8f9ed2ab0b",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "const set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);\n",
    testVariants: [
      {
        id: "b4e42881-6b58-4bd1-b743-87a9794fc00d",
        text: "<code>[1, 1, 2, 3, 4]</code>",
        isCorrect: false,
      },
      {
        id: "ccd369f3-1748-41a9-b003-bda8c7c9a541",
        text: "<code>[1, 2, 3, 4]</code>",
        isCorrect: false,
      },
      {
        id: "1cf27a4d-0dde-43f0-bdbe-839208910e5f",
        text: "<code>{1, 1, 2, 3, 4}</code>",
        isCorrect: false,
      },
      {
        id: "6e0d8556-d0aa-4738-b363-69589c55fa8c",
        text: "<code>{1, 2, 3, 4}</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "The <code>Set</code>  object is a collection of  <em>unique</em>  values: a value can only occur once in a set.\n\nWe passed the iterable <code>[1, 1, 2, 3, 4]</code>  with a duplicate value <code>1</code> Since we cannot have two of the same values in a set, one of them is removed. This results in <code>{1, 2, 3, 4}</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "3081d182-fdaa-4b35-b71c-f6288bcb001c",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question: "// counter.js\nlet counter = 10;\nexport default counter;\n",
    testVariants: [
      {
        id: "0cabff5d-2133-4e7a-bc00-8c1bffedbd23",
        text: "<code>10</code>",
        isCorrect: false,
      },
      {
        id: "b09bbac7-503d-4866-bc6f-366b561fd256",
        text: "<code>11</code>",
        isCorrect: false,
      },
      {
        id: "c0721e8e-f1d3-4edb-bb48-89272b3b40ea",
        text: "<code>Error</code>",
        isCorrect: true,
      },
      {
        id: "4d790227-e447-4fcb-bab0-78ea44718218",
        text: "<code>NaN</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "An imported module is  <em>read-only</em> : you cannot modify the imported module. Only the module that exports them can change its value.\n\nWhen we try to increment the value of <code>myCounter</code> , it throws an error: <code>myCounter</code>  is read-only and cannot be modified.\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "41d311f1-69e3-4656-bd40-926529298e2b",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const name = 'Lydia';\nage = 21;\n\nconsole.log(delete name);\nconsole.log(delete age);\n",
    testVariants: [
      {
        id: "31afcfb1-0e8d-47c0-b74a-0b9f4303190b",
        text: "<code>false</code> , <code>true</code>",
        isCorrect: true,
      },
      {
        id: "14531a8a-0f7d-452c-b7df-a4526f713d0e",
        text: '<code>"Lydia"</code> , <code>21</code>',
        isCorrect: false,
      },
      {
        id: "68692445-7225-4762-bcc2-67293c49fa31",
        text: "<code>true</code> , <code>true</code>",
        isCorrect: false,
      },
      {
        id: "0056a0f5-4ca2-442e-b5aa-71a51bb567e1",
        text: "<code>undefined</code> , <code>undefined</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "The <code>delete</code>  operator returns a boolean value: <code>true</code>  on a successful deletion, else it'll return <code>false</code> However, variables declared with the <code>var</code> , <code>const</code>  or <code>let</code>  keyword cannot be deleted using the <code>delete</code>  operator.\n\nThe <code>name</code>  variable was declared with a <code>const</code>  keyword, so its deletion is not successful: <code>false</code>  is returned. When we set <code>age</code>  equal to <code>21</code> , we actually added a property called <code>age</code>  to the global object. You can successfully delete properties from objects this way, also the global object, so <code>delete age</code>  returns <code>true</code>\n\n\n",
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "8ca01d9f-0700-482e-ba7f-9e142f74b8c7",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);\n",
    testVariants: [
      {
        id: "e7132195-2e0b-424f-b67a-d4b0d2121948",
        text: "<code>[[1, 2, 3, 4, 5]]</code>",
        isCorrect: false,
      },
      {
        id: "82061941-5d4f-49bc-be53-605d6e914bf5",
        text: "<code>[1, 2, 3, 4, 5]</code>",
        isCorrect: false,
      },
      {
        id: "370a0f23-107b-4263-b96e-a4827312cc25",
        text: "<code>1</code>",
        isCorrect: true,
      },
      {
        id: "185cf8ac-de68-43e7-ba3b-3153f98374a7",
        text: "<code>[1]</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'We can unpack values from arrays or properties from objects through destructuring. For example:\n\n<code>[a, b] = [1, 2]</code>;\n\n<img src="https://i.imgur.com/ADFpVop.png" width="200">\n\nThe value of <code>a</code>  is now <code>1</code> , and the value of <code>b</code>  is now <code>2</code> What we actually did in the question, is:\n\n<code>[y] = [1, 2, 3, 4, 5];</code>\n\n<img src="https://i.imgur.com/NzGkMNk.png" width="200">\n\nThis means that the value of <code>y</code>  is equal to the first value in the array, which is the number <code>1</code> When we log <code>y</code> , <code>1</code>  is returned.\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
  {
    id: "9a2a0577-8ea8-423e-bde0-70d7d214dc42",
    codeLanguage: "javascript",
    questionModel: "quiz",
    header: "What's the output?",
    question:
      "const user = { name: 'Lydia', age: 21 };\nconst admin = { admin: true,..user };\n\nconsole.log(admin);\n",
    testVariants: [
      {
        id: "dab2cbf6-ccea-411f-b507-7b73415d9dbb",
        text: '<code>{ admin: true, user: { name: "Lydia", age: 21 } }</code>',
        isCorrect: false,
      },
      {
        id: "5858ee61-877c-4f97-b2e2-216bec1e1d60",
        text: '<code>{ admin: true, name: "Lydia", age: 21 }</code>',
        isCorrect: true,
      },
      {
        id: "02d3724d-7352-446e-b020-6703485dd876",
        text: '<code>{ admin: true, user: ["Lydia", 21] }</code>',
        isCorrect: false,
      },
      {
        id: "bb7ef0de-e552-4e69-be6b-cb9a84e1bcd5",
        text: "<code>{ admin: true }</code>",
        isCorrect: false,
      },
    ],
    explanation:
      'It\'s possible to combine objects using the spread operator <code>...</code> It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the <code>user</code>  object, and add them to the <code>admin</code>  object. The <code>admin</code>  object now contains the copied key/value pairs, which results in <code>{ admin: true, name: "Lydia", age: 21 }</code>\n\n\n',
    watched: false,
    isMarked: false,
    rate: 0,
  },
];
