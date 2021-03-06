# Installation

Install `gulp-pilot-merger-preprocess` as a development dependency:

```shell
npm install --save-dev gulp-pilot-merger-preprocess
```

# Usage

After you have installed this plugin you can utilize it in your .pilotrc.{js,json} assuming you use gulp-pilot and preprocess:

> .pilotrc.js

````javascript
module.exports = {
    merger: {
        'preprocess': 'gulp-pilot-merger-preprocess'
    }
};
````

Or as simple JSON:

> .pilotrc.json

````JSON
{
    "merger": {
        "preprocess": "gulp-pilot-merger-preprocess"
    }
}
````

# API Documentation

<a name="preprocessMerger"></a>
## preprocessMerger(config, defaultConfig)
Merges preprocess options through complementing with a default config file.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The new config to be merged with defaultConfig. |
| defaultConfig | <code>Object</code> | The default config used to complement the new config. |


#License

The MIT License (MIT)

Copyright (c) 2016 Andreas Deuschlinger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
