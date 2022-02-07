/* eslint-disable max-len */
import { IQuestionItem } from "types/model";

export const data: Array<IQuestionItem> = [
  {
    id: "73e0107d-747a-4eb9-bb31-ea37df4c7753",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params"></span>) </span>{\n  <span class="hljs-built_in">console</span>.log(name);\n  <span class="hljs-built_in">console</span>.log(age);\n  <span class="hljs-keyword">var</span> name = <span class="hljs-string">"Lydia"</span>;\n  <span class="hljs-keyword">let</span> age = <span class="hljs-number">21</span>;\n}\n\nsayHi();\n</code></pre>',
    testVariants: [
      {
        text: "<code>Lydia</code> и <code>undefined</code>",
        isCorrect: false,
      },
      {
        text: "<code>Lydia</code> и <code>ReferenceError</code>",
        isCorrect: false,
      },
      {
        text: "<code>ReferenceError</code> и <code>21</code>",
        isCorrect: false,
      },
      {
        text: "<code>undefined</code> и <code>ReferenceError</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "Внутри функции мы сперва определяем переменную\n    <code>name</code> с помощью ключевого слова <code>var</code>. Это означает,\n    что переменная будет поднята (область памяти под переменную будет выделена\n    во время фазы создания) со значением <code>undefined</code> по умолчанию, до\n    тех пора пока исполнение кода не дойдет до строчки, где определяется\n    переменная. Мы еще не определили значение <code>name</code> когда пытаемся\n    вывести её в консоль, поэтому в консоли будет <code>undefined</code>.\n    Переменные, определенные с помощью <code>let</code> (и <code>const</code>),\n    также поднимаются, но в отличие от <code>var</code>, не\n    <i>инициализируются</i>. Доступ к ним не возможен до тех пор, пока не\n    выполнится строка их определения (инициализации). Это называется\n    &quot;временная мертвая зона&quot;. Когда мы пытаемся обратиться к\n    переменным до того момента как они определены, JavaScript выбрасывает\n    исключение <code>ReferenceError</code>.",
  },
  {
    id: "6652f3ca-e10e-4d3b-b029-88c4c22ae3b5",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-keyword">for</span> (var i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">3</span>; i++) {\n  setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(i), <span class="hljs-number">1</span>);\n}\n\n<span class="hljs-keyword">for</span> (let i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">3</span>; i++) {\n  setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(i), <span class="hljs-number">1</span>);\n}\n</code></pre>',
    testVariants: [
      {
        text: "<code>0 1 2</code> и <code>0 1 2</code>",
        isCorrect: false,
      },
      {
        text: "<code>0 1 2</code> и <code>3 3 3</code>",
        isCorrect: false,
      },
      {
        text: "<code>3 3 3</code> и <code>0 1 2</code>",
        isCorrect: true,
      },
    ],
    explanation:
      "Из-за очереди событий в JavaScript, функция\n    <code>setTimeout</code> вызывается <em>после</em> того как цикл будет\n    завершен. Так как переменная <code>i</code> в первом цикле была определена с\n    помощью <code>var</code>, она будет глобальной. В цикле мы каждый раз\n    увеличиваем значение <code>i</code> на <code>1</code>, используя унарный\n    оператор <code>++</code>. К моменту выполнения функции\n    <code>setTimeout</code> значение <code>i</code> будет равно <code>3</code> в\n    первом примере. Во втором цикле переменная <code>i</code> определена с\n    помощью <code>let</code>. Такие переменные (а также <code>const</code>)\n    имеют блочную область видимости (блок это что угодно между\n    <code>{ }</code>). С каждой итерацией <code>i</code> будет иметь новое\n    значение, и каждое значение будет замкнуто в своей области видимости внутри\n    цикла.",
  },
  {
    id: "1850d53e-dbde-4e87-b1de-51972e5fec92",
    header: "Что будет в консоли?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-keyword">const</span> <span class="hljs-built_in">shape</span> = {\n  radius: <span class="hljs-number">10</span>,\n  diameter() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.radius * <span class="hljs-number">2</span>;\n  },\n  perimeter: () =&gt; <span class="hljs-number">2</span> * Math.<span class="hljs-literal">PI</span> * <span class="hljs-keyword">this</span>.radius\n};\n\n<span class="hljs-built_in">shape</span>.diameter();\n<span class="hljs-built_in">shape</span>.perimeter();\n</code></pre>',
    testVariants: [
      {
        text: "<code>20</code> и <code>62.83185307179586</code>",
        isCorrect: false,
      },
      {
        text: "<code>20</code> и <code>NaN</code>",
        isCorrect: true,
      },
      {
        text: "<code>20</code> и <code>63</code>",
        isCorrect: false,
      },
      {
        text: "<code>NaN</code> и <code>63</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "Заметь, что <code>diameter</code> это обычная функция, в то\n    время как <code>perimeter</code> это стрелочная функция. У стрелочных\n    функций значение <code>this</code> указывает на окружающую область\n    видимости, в отличие от обычных функций! Это значит, что при вызове\n    <code>perimeter</code> значение <code>this</code> у этой функции указывает\n    не на объект <code>shape</code>, а на внешнюю область видимости (например,\n    window). У этого объекта нет ключа <code>radius</code>, поэтому возвращается\n    <code>undefined</code>.",
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
      },
      {
        text: "<code>false</code> и <code>NaN</code>",
        isCorrect: false,
      },
      {
        text: "<code>false</code> и <code>false</code>",
        isCorrect: false,
      },
    ],
    explanation:
      "Унарный плюс приводит операнд к числу. <code>true</code> это\n    <code>1</code>, а <code>false</code> это <code>0</code>. Строка\n    <code>&#39;Lydia&#39;</code> это &quot;истинное&quot; значение. На самом\n    деле мы спрашиваем &quot;является ли это истинное значение ложным&quot;?\n    Ответ: <code>false</code>.",
  },
  {
    id: "d301f220-911c-413c-b2c9-d47c42370f51",
    header: "Что НЕ является валидным?",
    watched: false,
    question:
      '<pre><code class="lang-javascript"><span class="hljs-attribute">const bird</span> = {\n  size: <span class="hljs-string">"small"</span>\n};\n\n<span class="hljs-attribute">const mouse</span> = {\n  name: <span class="hljs-string">"Mickey"</span>,\n  small: true\n};\n</code></pre>',
    testVariants: [
      {
        text: "<code>mouse.bird.size</code>",
        isCorrect: true,
      },
      {
        text: "<code>mouse[bird.size]</code>",
        isCorrect: false,
      },
      {
        text: "<code>mouse[bird[&quot;size&quot;]]</code>",
        isCorrect: false,
      },
      {
        text: "Все варианты валидны",
        isCorrect: false,
      },
    ],
    explanation:
      "В JavaScript все ключи объекта являются строками (кроме\n    Symbol). И хотя мы не <em>набираем</em> их как строки, они всегда\n    преобразовываются к строкам под капотом. JavaScript интерпретирует (или\n    распаковывает) операторы. При использовании квадратных скобок JS замечает\n    <code>[</code> и продолжает пока не встретит <code>]</code>. Только после\n    этого он вычислит то, что находится внутри скобок.\n\n    <code>mouse[bird.size]</code>: Сперва определяется <code>bird.size</code>,\n    которое равно <code>&quot;small&quot;</code>.\n    <code>mouse[&quot;small&quot;]</code> возвращает <code>true</code>. Но с\n    записью через точку так не происходит. У <code>mouse</code> нет ключа\n    <code>bird</code>. Таким образом, <code>mouse.bird</code> равно\n    <code>undefined</code>. Затем мы запрашиваем ключ <code>size</code>,\n    используя точечную нотацию: <code>mouse.bird.size</code>. Так как\n    <code>mouse.bird</code> это <code>undefined</code>, мы запрашиваем\n    <code>undefined.size</code>. Это не является валидным, и мы получаем ошибку\n    типа <code>Cannot read property &quot;size&quot; of undefined</code>.",
  },
];
