/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
import { IQuestionItem } from "types/model";
// ru/start from question #12

export const data: Array<IQuestionItem> = [
  {
    id: "73e0107d-747a-4eb9-bb31-ea37df4c7753",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params"></span>) </span>{\n<span class="hljs-built_in">console</span>.log(name);\n<span class="hljs-built_in">console</span>.log(age);\n<span class="hljs-keyword">var</span> name = <span class="hljs-string">"Lydia"</span>;\n<span class="hljs-keyword">let</span> age = <span class="hljs-number">21</span>;\n}\n\nsayHi();\n</code></pre>',
    testVariants: [
      {
        text: "<code>Lydia</code> и <code>undefined</code>",
        isCorrect: false,
        id: "e4bd7e86-17eb-4176-bc0d-c7d587bba57e",
      },
      {
        text: "<code>Lydia</code> и <code>ReferenceError</code>",
        isCorrect: false,
        id: "6d05931e-6ab6-4073-b51e-aa24cf5225fa",
      },
      {
        text: "<code>ReferenceError</code> и <code>21</code>",
        isCorrect: false,
        id: "aa35d9d4-76b8-476d-bed1-f3acf7a7a3bb",
      },
      {
        text: "<code>undefined</code> и <code>ReferenceError</code>",
        isCorrect: true,
        id: "e165dff5-664e-4951-b33a-323dd226c01c",
      },
    ],
    explanation:
      "Внутри функции мы сперва определяем переменную\n<code>name</code> с помощью ключевого слова <code>var</code>. Это означает,\nчто переменная будет поднята (область памяти под переменную будет выделена\nво время фазы создания) со значением <code>undefined</code> по умолчанию, до\nтех пора пока исполнение кода не дойдет до строчки, где определяется\nпеременная. Мы еще не определили значение <code>name</code> когда пытаемся\nвывести её в консоль, поэтому в консоли будет <code>undefined</code>.\nПеременные, определенные с помощью <code>let</code> (и <code>const</code>),\nтакже поднимаются, но в отличие от <code>var</code>, не\n<i>инициализируются</i>. Доступ к ним не возможен до тех пор, пока не\nвыполнится строка их определения (инициализации). Это называется\n&quot;временная мертвая зона&quot;. Когда мы пытаемся обратиться к\nпеременным до того момента как они определены, JavaScript выбрасывает\nисключение <code>ReferenceError</code>.",
  },
  {
    id: "6652f3ca-e10e-4d3b-b029-88c4c22ae3b5",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-keyword">for</span> (var i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">3</span>; i++) {\nsetTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(i), <span class="hljs-number">1</span>);\n}\n\n<span class="hljs-keyword">for</span> (let i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">3</span>; i++) {\nsetTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(i), <span class="hljs-number">1</span>);\n}\n</code></pre>',
    testVariants: [
      {
        text: "<code>0 1 2</code> и <code>0 1 2</code>",
        isCorrect: false,
        id: "42b85f28-ad64-4e4e-b1d6-921f17da6090",
      },
      {
        text: "<code>0 1 2</code> и <code>3 3 3</code>",
        isCorrect: false,
        id: "ef4b3e01-bc52-40a0-b23b-87dcb6dd22f0",
      },
      {
        text: "<code>3 3 3</code> и <code>0 1 2</code>",
        isCorrect: true,
        id: "a425b9c4-2812-4a37-bc0a-6b6b44a55a5d",
      },
    ],
    explanation:
      "Из-за очереди событий в JavaScript, функция\n<code>setTimeout</code> вызывается <em>после</em> того как цикл будет\nзавершен. Так как переменная <code>i</code> в первом цикле была определена с\nпомощью <code>var</code>, она будет глобальной. В цикле мы каждый раз\nувеличиваем значение <code>i</code> на <code>1</code>, используя унарный\nоператор <code>++</code>. К моменту выполнения функции\n<code>setTimeout</code> значение <code>i</code> будет равно <code>3</code> в\nпервом примере. Во втором цикле переменная <code>i</code> определена с\nпомощью <code>let</code>. Такие переменные (а также <code>const</code>)\nимеют блочную область видимости (блок это что угодно между\n<code>{ }</code>). С каждой итерацией <code>i</code> будет иметь новое\nзначение, и каждое значение будет замкнуто в своей области видимости внутри\nцикла.",
  },
  {
    id: "1850d53e-dbde-4e87-b1de-51972e5fec92",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-keyword">const</span> <span class="hljs-built_in">shape</span> = {\nradius: <span class="hljs-number">10</span>,\ndiameter() {\n<span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.radius * <span class="hljs-number">2</span>;\n},\nperimeter: () =&gt; <span class="hljs-number">2</span> * Math.<span class="hljs-literal">PI</span> * <span class="hljs-keyword">this</span>.radius\n};\n\n<span class="hljs-built_in">shape</span>.diameter();\n<span class="hljs-built_in">shape</span>.perimeter();\n</code></pre>',
    testVariants: [
      {
        text: "<code>20</code> и <code>62.83185307179586</code>",
        isCorrect: false,
        id: "6c911109-0dce-4257-bb7a-2ed416d6f208",
      },
      {
        text: "<code>20</code> и <code>NaN</code>",
        isCorrect: true,
        id: "50410119-c0db-4ad9-be76-d7f695527ef8",
      },
      {
        text: "<code>20</code> и <code>63</code>",
        isCorrect: false,
        id: "6e7310ff-d8b5-4ab6-bdef-55a95293af40",
      },
      {
        text: "<code>NaN</code> и <code>63</code>",
        isCorrect: false,
        id: "8651dd01-74dc-4ef3-b191-7ed732609b18",
      },
    ],
    explanation:
      "Заметь, что <code>diameter</code> это обычная функция, в то\nвремя как <code>perimeter</code> это стрелочная функция. У стрелочных\nфункций значение <code>this</code> указывает на окружающую область\nвидимости, в отличие от обычных функций! Это значит, что при вызове\n<code>perimeter</code> значение <code>this</code> у этой функции указывает\nне на объект <code>shape</code>, а на внешнюю область видимости (например,\nwindow). У этого объекта нет ключа <code>radius</code>, поэтому возвращается\n<code>undefined</code>.",
  },
  {
    id: "f48cf816-344b-4901-bb2c-3ed0bfbe746c",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript">+true<span class="hljs-comment">;</span>\n!<span class="hljs-string">"Lydia"</span><span class="hljs-comment">;</span>\n</code></pre>',
    testVariants: [
      {
        text: "<code>1</code> и <code>false</code>",
        isCorrect: true,
        id: "b75da725-9515-4e64-b75a-02b4ed433981",
      },
      {
        text: "<code>false</code> и <code>NaN</code>",
        isCorrect: false,
        id: "edd3ee85-f289-4272-b02d-0ab6bc6ca540",
      },
      {
        text: "<code>false</code> и <code>false</code>",
        isCorrect: false,
        id: "1ef4971e-f39b-4e79-ba76-08bffb08e6ff",
      },
    ],
    explanation:
      "Унарный плюс приводит операнд к числу. <code>true</code> это\n<code>1</code>, а <code>false</code> это <code>0</code>. Строка\n<code>&#39;Lydia&#39;</code> это &quot;истинное&quot; значение. На самом\nделе мы спрашиваем &quot;является ли это истинное значение ложным&quot;?\nОтвет: <code>false</code>.",
  },
  {
    id: "d301f220-911c-413c-b2c9-d47c42370f51",
    header: "Что НЕ является валидным?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-attribute">const bird</span> = {\nsize: <span class="hljs-string">"small"</span>\n};\n\n<span class="hljs-attribute">const mouse</span> = {\nname: <span class="hljs-string">"Mickey"</span>,\nsmall: true\n};\n</code></pre>',
    testVariants: [
      {
        text: "<code>mouse.bird.size</code>",
        isCorrect: true,
        id: "06bc9e2a-4d09-40bd-bbfc-af065e5a3c34",
      },
      {
        text: "<code>mouse[bird.size]</code>",
        isCorrect: false,
        id: "c8415b17-443c-47de-b4a4-62fdddeadc26",
      },
      {
        text: "<code>mouse[bird[&quot;size&quot;]]</code>",
        isCorrect: false,
        id: "53b94236-037c-428b-b382-80eab616f1fa",
      },
      {
        text: "Все варианты валидны",
        isCorrect: false,
        id: "55b3909f-c18c-4460-b5a6-b4a6aafe85dc",
      },
    ],
    explanation:
      "В JavaScript все ключи объекта являются строками (кроме\nSymbol). И хотя мы не <em>набираем</em> их как строки, они всегда\nпреобразовываются к строкам под капотом. JavaScript интерпретирует (или\nраспаковывает) операторы. При использовании квадратных скобок JS замечает\n<code>[</code> и продолжает пока не встретит <code>]</code>. Только после\nэтого он вычислит то, что находится внутри скобок.\n\n<code>mouse[bird.size]</code>: Сперва определяется <code>bird.size</code>,\nкоторое равно <code>&quot;small&quot;</code>.\n<code>mouse[&quot;small&quot;]</code> возвращает <code>true</code>. Но с\nзаписью через точку так не происходит. У <code>mouse</code> нет ключа\n<code>bird</code>. Таким образом, <code>mouse.bird</code> равно\n<code>undefined</code>. Затем мы запрашиваем ключ <code>size</code>,\nиспользуя точечную нотацию: <code>mouse.bird.size</code>. Так как\n<code>mouse.bird</code> это <code>undefined</code>, мы запрашиваем\n<code>undefined.size</code>. Это не является валидным, и мы получаем ошибку\nтипа <code>Cannot read property &quot;size&quot; of undefined</code>.",
  },
  {
    id: "3f28d2ac-4b7d-4208-b63d-2ea7f620c6e9",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript">let c = { greeting: <span class="hljs-string">"Hey!"</span> }<span class="hljs-comment">;</span>\nlet d<span class="hljs-comment">;</span>\n\nd = c<span class="hljs-comment">;</span>\nc.greeting = <span class="hljs-string">"Hello"</span><span class="hljs-comment">;</span>\nconsole.log(d.greeting)<span class="hljs-comment">;</span>\n</code></pre>',
    testVariants: [
      {
        text: "<code>Hello</code>",
        isCorrect: true,
        id: "6f86feaa-7575-4edc-bdff-f27f2c32dc67",
      },
      {
        text: "<code>Hey!</code>",
        isCorrect: false,
        id: "7f893e63-b985-4e18-b58f-0a56f06cbe2d",
      },
      {
        text: "<code>undefined</code>",
        isCorrect: false,
        id: "ac510d40-fb90-4745-baa0-4aedd5461ee9",
      },
      {
        text: "<code>ReferenceError</code>",
        isCorrect: false,
        id: "0783c044-4565-4ce5-bd64-b41a0b7c772c",
      },
      {
        text: "<code>TypeError</code>",
        isCorrect: false,
        id: "3c970bec-bf43-4c06-bfc9-4c4245ef2044",
      },
    ],
    explanation:
      'В JavaScript все объекты являются\n<em>ссылочными</em> типами данных. Сперва переменная\n<code>c</code> указывает на объект. Затем мы указываем переменной\n<code>d</code> ссылаться на тот же объект, что и <code>c</code>.\n\n<img src="https://i.imgur.com/ko5k0fs.png" width="200" />\n\nКогда ты изменяешь один объект, то изменяются значения всех ссылок,\nуказывающих на этот объект.',
  },
  {
    id: "c6a04e01-fb2e-4ca1-b1a1-e1f07321a21b",
    header: "Каким будет результат?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Chameleon</span> </span>{\n<span class="hljs-keyword">static</span> colorChange(<span class="hljs-keyword">new</span><span class="hljs-type">Color</span>) {\n<span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Color</span> = <span class="hljs-keyword">new</span><span class="hljs-type">Color</span>;\n<span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Color</span>;\n}\n\nconstructor({ <span class="hljs-keyword">new</span><span class="hljs-type">Color</span> = <span class="hljs-string">"green"</span> } = {}) {\n<span class="hljs-built_in">this</span>.<span class="hljs-keyword">new</span><span class="hljs-type">Color</span> = <span class="hljs-keyword">new</span><span class="hljs-type">Color</span>;\n}\n}\n\nconst freddie = <span class="hljs-keyword">new</span> <span class="hljs-type">Chameleon</span>({ <span class="hljs-keyword">new</span><span class="hljs-type">Color</span>: <span class="hljs-string">"purple"</span> });\nfreddie.colorChange(<span class="hljs-string">"orange"</span>);\n</code></pre>',
    testVariants: [
      {
        text: "<code>orange</code>",
        isCorrect: false,
        id: "61e91229-c50c-4962-b259-4643992a0b2d",
      },
      {
        text: "<code>purple</code>",
        isCorrect: false,
        id: "804d6dfb-2c79-40c2-b9a0-553bf955378b",
      },
      {
        text: "<code>green</code>",
        isCorrect: false,
        id: "40904e87-2b90-428a-b502-52c5cd12a9d6",
      },
      {
        text: "<code>TypeError</code>",
        isCorrect: true,
        id: "eb033e7a-f11d-4783-be36-6347975ab0da",
      },
    ],
    explanation:
      "Функция <code>colorChange</code> является статичной.\nСтатичные методы не имеют доступа к экземплярам класса. Так как\n<code>freddie</code> это экземпляр, то статичный метод там не доступен.\nПоэтому выбрасывается ошибка <code>TypeError</code>.",
  },
  {
    id: "cb421f2e-096f-4d3a-b33e-6a0c28d35eac",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript">let greeting<span class="hljs-comment">;</span>\n<span class="hljs-attribute">greetign</span> = {}<span class="hljs-comment">; // Опечатка!</span>\nconsole.log(greetign)<span class="hljs-comment">;</span>\n</code></pre>',
    testVariants: [
      {
        text: "<code>{}</code>",
        isCorrect: true,
        id: "93fd7d5f-c738-4572-bd7e-633504f2e405",
      },
      {
        text: "<code>ReferenceError: greetign is not defined</code>",
        isCorrect: false,
        id: "ff4472c1-0b88-4237-b842-3c697e8fe4a6",
      },
      {
        text: "<code>undefined</code>",
        isCorrect: false,
        id: "6bb3fa07-a209-42c3-b7a7-a33119b8b3b8",
      },
    ],
    explanation:
      "В консоли выведется объект, потому что мы только что\nсоздали пустой объект в глобальном объекте! Когда мы вместо\n<code>greeting</code> написали <code>greetign</code>, интерпретатор JS\nна самом деле выполнил <code>global.greetign = {}</code> (или\n<code>window.greetign = {}</code> в браузере). Нужно использовать\n<code>&quot;use strict&quot;</code>, чтобы избежать такого поведения.\nЭта запись поможет быть уверенным в том, что переменная была определена\nперед тем как ей присвоили значение.",
  },
  {
    id: "07c82f97-45d3-4bdc-b15d-d5428729833f",
    header: "Что произойдет?",
    watched: false,
    question:
      ' <pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bark</span>(<span class="hljs-params"></span>) </span>{\n<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Woof!"</span>);\n}\n\nbark.animal = <span class="hljs-string">"dog"</span>;\n</code></pre>',
    testVariants: [
      {
        text: "Ничего, всё в порядке!",
        isCorrect: true,
        id: "bbfc2067-a9a0-4580-bbae-4b177baa3643",
      },
      {
        text: "<code>SyntaxError</code>. Нельзя добавлять свойства функциям таким способом.",
        isCorrect: false,
        id: "5c97f72b-a7c1-49fc-b284-15ba6add3a6d",
      },
      {
        text: "<code>undefined</code>",
        isCorrect: false,
        id: "550f19e8-8542-423f-bf78-6fcc08e80b4d",
      },
      {
        text: "<code>ReferenceError</code>",
        isCorrect: false,
        id: "179a496b-16fa-4aaf-b91d-c319788bfc9b",
      },
    ],
    explanation:
      "В JavaScript это возможно, т.к. функции это объекты! (Всё\nесть объект кроме примитивов). Функция — это специальный тип объекта,\nкоторый можно вызвать. Кроме того, функция — это объект со свойствами.\nСвойство такого объекта нельзя вызвать, так как оно не является\nфункцией.",
  },
  {
    id: "79c1b327-f231-4eae-bd01-642914ff3311",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">firstName, lastName</span>) </span>{\n<span class="hljs-keyword">this</span>.firstName = firstName;\n<span class="hljs-keyword">this</span>.lastName = lastName;\n}\n\n<span class="hljs-keyword">const</span> member = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">"Lydia"</span>, <span class="hljs-string">"Hallie"</span>);\nPerson.getFullName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n<span class="hljs-keyword">return</span> <span class="hljs-string"><code><span class="hljs-subst">${<span class="hljs-keyword">this</span>.firstName}</span> <span class="hljs-subst">${<span class="hljs-keyword">this</span>.lastName}</span></code></span>;\n}\n\n<span class="hljs-built_in">console</span>.log(member.getFullName());\n</code></pre>',
    testVariants: [
      {
        text: "<code>TypeError</code>",
        isCorrect: true,
        id: "1cc10a36-b58a-4a38-b4ca-1c399c711fab",
      },
      {
        text: "<code>SyntaxError</code>",
        isCorrect: false,
        id: "ca1fcebb-22f1-4067-b924-18892d204a89",
      },
      {
        text: "<code>Lydia Hallie</code>",
        isCorrect: false,
        id: "ba447b83-be46-4e95-bf6c-6ffb2f639883",
      },
      {
        text: "<code>undefined</code> <code>undefined</code>",
        isCorrect: false,
        id: "4427d5ee-1120-4877-b8a9-a88aa1c23af0",
      },
    ],
    explanation:
      '<p>Нельзя добавлять свойства конструктору, как обычному объекту. Если нужно добавить фичу всем объектам, то необходимо использовать прототипы. В данном случае</p>\n<pre><code class="lang-javascript">Person.prototype.getFullName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{\n<span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">`${<span class="hljs-keyword">this</span>.firstName}`</span> <span class="hljs-subst">${<span class="hljs-keyword">this</span>.lastName}</span>`</span>;\n}\n</code></pre>\n<p>сделает метод <code>member.getFullName()</code> рабочим. В чем тут преимущество? Предположим, что мы добавили этот метод к конструктору. Возможно, не каждому экземпляру <code>Person</code> нужен этот метод. Это приведет к большим потерям памяти, т.к. все экземпляры будут иметь это свойство. Напротив, если мы добавим этот метод только к прототипу, у нас будет только одно место в памяти, к которому смогут обращаться все экземпляры!</p>',
  },
];
