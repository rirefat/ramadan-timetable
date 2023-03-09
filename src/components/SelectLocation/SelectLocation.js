import React from 'react';

const SelectLocation = () => {
    return (
        <div>
            <form action="#">
                <select name="languages" id="lang">
                    <option value="select">Select a language</option>
                    <option value="javascript">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="java">Java</option>
                    <option value="golang">Golang</option>
                    <option value="python">Python</option>
                    <option value="c#">C#</option>
                    <option value="C++">C++</option>
                    <option value="erlang">Erlang</option>
                </select>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default SelectLocation;