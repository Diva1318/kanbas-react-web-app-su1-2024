import React, { useState } from 'react';

const removeServer = process.env.REACT_APP_REMOTE_SERVER;

const QueryParameters: React.FC = () => {
  const [a, setA] = useState<number | string>('');
  const [b, setB] = useState<number | string>('');

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        className="form-control mb-2"
        value={a}
        type="number"
        onChange={(e) => setA(e.target.value)}
      />
      <input
        id="wd-query-parameter-b"
        className="form-control mb-2"
        value={b}
        type="number"
        onChange={(e) => setB(e.target.value)}
      />
      <a
        id="wd-query-parameter-add"
        href={`${removeServer}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a> <br />
      <a
        id="wd-query-parameter-subtract"
        href={`${removeServer}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a> <br />
      <a
        id="wd-query-parameter-multiply"
        href={`${removeServer}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a> <br />
      <a
        id="wd-query-parameter-divide"
        href={`${removeServer}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}

export default QueryParameters;
