"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[438576],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,m=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},817612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const i={title:"Java UDF",language:"en"},l=void 0,o={unversionedId:"query/udf/java-user-defined-function",id:"query/udf/java-user-defined-function",title:"Java UDF",description:"\x3c!--",source:"@site/docs/query/udf/java-user-defined-function.md",sourceDirName:"query/udf",slug:"/query/udf/java-user-defined-function",permalink:"/docs/dev/query/udf/java-user-defined-function",draft:!1,tags:[],version:"current",frontMatter:{title:"Java UDF",language:"en"},sidebar:"docs",previous:{title:"Import Analysis",permalink:"/docs/dev/query/query-analysis/import-analysis"},next:{title:"Data Lakehouse Overview",permalink:"/docs/dev/lakehouse/lakehouse-overview"}},s={},u=[{value:"Introduction to Java UDF",id:"introduction-to-java-udf",level:2},{value:"Creating UDF",id:"creating-udf",level:2},{value:"UDF",id:"udf",level:3},{value:"UDAF",id:"udaf",level:3},{value:"UDTF",id:"udtf",level:3},{value:"Using UDF",id:"using-udf",level:2},{value:"Dropping UDF",id:"dropping-udf",level:2},{value:"Type Correspondence",id:"type-correspondence",level:2},{value:"Writing UDF",id:"writing-udf",level:2},{value:"UDF",id:"udf-1",level:3},{value:"UDAF",id:"udaf-1",level:3},{value:"UDTF",id:"udtf-1",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Loading static variables",id:"loading-static-variables",level:3},{value:"Usage Notes",id:"usage-notes",level:2}],p={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction-to-java-udf"},"Introduction to Java UDF"),(0,r.yg)("p",null,"Java UDF provides users with a Java interface for writing UDFs, making it convenient for users to execute custom functions using the Java language."),(0,r.yg)("p",null,"Doris supports writing UDFs, UDAFs, and UDTFs using JAVA. Unless otherwise specified, UDF is used as a general term for all user-defined functions in the following text."),(0,r.yg)("h2",{id:"creating-udf"},"Creating UDF"),(0,r.yg)("p",null,'The implemented jar package can be placed locally or stored on a remote server for download via HTTP, but each FE and BE node must be able to access the jar package.\n"file"=" file:///path/to/java-udf-demo-jar-with-dependencies.jar "\n"file"=" http://IP:port/udf-code.jar "'),(0,r.yg)("p",null,"Otherwise, an error message ",(0,r.yg)("inlineCode",{parentName:"p"},"Couldn't open file ......")," will be returned."),(0,r.yg)("p",null,"For more syntax help, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION"},"CREATE FUNCTION"),"."),(0,r.yg)("h3",{id:"udf"},"UDF"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n')),(0,r.yg)("h3",{id:"udaf"},"UDAF"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE AGGREGATE FUNCTION middle_quantiles(DOUBLE,INT) RETURNS DOUBLE PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.demo.MiddleNumberUDAF",\n    "always_nullable"="true",\n    "type"="JAVA_UDAF"\n);\n')),(0,r.yg)("h3",{id:"udtf"},"UDTF"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"UDTF is supported starting from Doris version 3.0.")),(0,r.yg)("h2",{id:"using-udf"},"Using UDF"),(0,r.yg)("p",null,"To utilize UDFs, users must possess the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," privilege for the corresponding database."),(0,r.yg)("p",null,"The usage of UDFs is identical to standard functions, with the primary distinction being that built-in functions have a global scope, while UDFs are scoped within the DB."),(0,r.yg)("p",null,"When the session is linked within the database, directly using the UDF name will search for the corresponding UDF within the current DB. Otherwise, users must explicitly specify the UDF's database name, for example, ",(0,r.yg)("inlineCode",{parentName:"p"},"dbName.funcName"),"."),(0,r.yg)("h2",{id:"dropping-udf"},"Dropping UDF"),(0,r.yg)("p",null,"If a UDF is no longer needed, it can be dropped using the following command, as detailed in ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FUNCTION"},"DROP FUNCTION"),"."),(0,r.yg)("h2",{id:"type-correspondence"},"Type Correspondence"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"UDF Argument Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bool"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Short")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BigInt"),(0,r.yg)("td",{parentName:"tr",align:null},"Long")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LargeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"BigInteger")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null},"Float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"Double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"LocalDate")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"LocalDateTime")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"BigDecimal")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"array<Type>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ArrayList<Type>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"map<Type1,Type2>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"HashMap<Type1,Type2>"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"struct<Type...>")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ArrayList<Object>")," (from version 3.0.0)")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"array/map/struct")," types can be nested with other types. For instance, Doris: ",(0,r.yg)("inlineCode",{parentName:"p"},"array<array<int>>")," corresponds to JAVA UDF Argument Type: ",(0,r.yg)("inlineCode",{parentName:"p"},"ArrayList<ArrayList<Integer>>"),". Other types follow the same pattern.")),(0,r.yg)("admonition",{title:"Warning",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"When creating functions, avoid using ",(0,r.yg)("inlineCode",{parentName:"p"},"varchar")," in place of ",(0,r.yg)("inlineCode",{parentName:"p"},"string"),", as this may cause the function to fail.")),(0,r.yg)("h2",{id:"writing-udf"},"Writing UDF"),(0,r.yg)("p",null,"This section mainly introduces how to develop a Java UDF. Examples are provided in ",(0,r.yg)("inlineCode",{parentName:"p"},"samples/doris-demo/java-udf-demo/")," for reference. Click ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/doris-demo/java-udf-demo"},"here")," to view them."),(0,r.yg)("p",null,"When writing a UDF in Java, the main entry point must be the ",(0,r.yg)("inlineCode",{parentName:"p"},"evaluate")," function. This is consistent with other engines like Hive. In this example, we write an ",(0,r.yg)("inlineCode",{parentName:"p"},"AddOne")," UDF to perform an increment operation on integer inputs."),(0,r.yg)("p",null,"It is worth mentioning that this example not only supports Java UDFs in Doris but is also a UDF supported by Hive. This means that Hive UDFs can be directly migrated to Doris."),(0,r.yg)("p",null,"Additionally, if the UDF being defined needs to load large resource files or if you want to define global static variables, you can refer to the static variable loading method described at the bottom of the document."),(0,r.yg)("h3",{id:"udf-1"},"UDF"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class AddOne extends UDF {\n    public Integer evaluate(Integer value) {\n        return value == null ? null : value + 1;\n    }\n}\n")),(0,r.yg)("h3",{id:"udaf-1"},"UDAF"),(0,r.yg)("p",null,"When writing a UDAF using Java code, there are some required functions (marked as required) and an inner class State that must be implemented. Below is a specific example to illustrate."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 1")),(0,r.yg)("p",null,"The following SimpleDemo will implement a simple function similar to sum, with the input parameter being INT and the output parameter being INT."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'package org.apache.doris.udf.demo;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\nimport java.util.logging.Logger;\n\npublic class SimpleDemo  {\n\n    Logger log = Logger.getLogger("SimpleDemo");\n\n    //Need an inner class to store data\n    /*required*/\n    public static class State {\n        /*some variables if you need */\n        public int sum = 0;\n    }\n\n    /*required*/\n    public State create() {\n        /* here could do some init work if needed */\n        return new State();\n    }\n\n    /*required*/\n    public void destroy(State state) {\n        /* here could do some destroy work if needed */\n    }\n\n    /*Not Required*/\n    public void reset(State state) {\n        /*if you want this udaf function can work with window function.*/\n        /*Must impl this, it will be reset to init state after calculate every window frame*/\n        state.sum = 0;\n    }\n\n    /*required*/\n    //first argument is State, then other types your input\n    public void add(State state, Integer val) throws Exception {\n        /* here doing update work when input data*/\n        if (val != null) {\n            state.sum += val;\n        }\n    }\n\n    /*required*/\n    public void serialize(State state, DataOutputStream out)  {\n        /* serialize some data into buffer */\n        try {\n            out.writeInt(state.sum);\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n    }\n\n    /*required*/\n    public void deserialize(State state, DataInputStream in)  {\n        /* deserialize get data from buffer before you put */\n        int val = 0;\n        try {\n            val = in.readInt();\n        } catch (Exception e) {\n            /* Do not throw exceptions */\n            log.info(e.getMessage());\n        }\n        state.sum = val;\n    }\n\n    /*required*/\n    public void merge(State state, State rhs) throws Exception {\n        /* merge data from state */\n        state.sum += rhs.sum;\n    }\n\n    /*required*/\n    //return Type you defined\n    public Integer getValue(State state) throws Exception {\n        /* return finally result */\n        return state.sum;\n    }\n}\n\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example 2")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'package org.apache.doris.udf.demo;  \n  \nimport java.io.DataInputStream;  \nimport java.io.DataOutputStream;  \nimport java.math.BigDecimal;  \nimport java.util.Arrays;  \nimport java.util.logging.Logger;  \n  \n/* UDAF to calculate the median */  \npublic class MedianUDAF {  \n    Logger log = Logger.getLogger("MedianUDAF");  \n  \n    // State storage  \n    public static class State {  \n        // Precision of the return result  \n        int scale = 0;  \n        // Whether it is the first time to execute the add method for a certain aggregation condition under a certain tablet  \n        boolean isFirst = true;  \n        // Data storage  \n        public StringBuilder stringBuilder;  \n    }  \n  \n    // Initialize the state  \n    public State create() {  \n        State state = new State();  \n        // Pre-initialize based on the amount of data that needs to be aggregated under each aggregation condition of each tablet to increase performance  \n        state.stringBuilder = new StringBuilder(1000);  \n        return state;  \n    }  \n  \n    // Process each data under respective aggregation conditions for each tablet  \n    public void add(State state, Double val, int scale) {  \n        try {  \n            if (val != null && state.isFirst) {  \n                state.stringBuilder.append(scale).append(",").append(val).append(",");  \n                state.isFirst = false;  \n            } else if (val != null) {  \n                state.stringBuilder.append(val).append(",");  \n            }  \n        } catch (Exception e) {  \n            // If it cannot be guaranteed that there will be no exceptions, it is recommended to maximize exception capture in each method, as handling of exceptions thrown by Java is currently not supported  \n            log.info("Data acquisition exception: " + e.getMessage());  \n        }  \n    }  \n  \n    // Data needs to be output for aggregation after processing  \n    public void serialize(State state, DataOutputStream out) {  \n        try {  \n            // Currently, only DataOutputStream is provided. If serialization of objects is required, methods such as concatenating strings, converting to JSON, or serializing into byte arrays can be considered  \n            // If the State object needs to be serialized, it may be necessary to implement a serialization interface for the State inner class  \n            // Ultimately, everything needs to be transmitted via DataOutputStream  \n            out.writeUTF(state.stringBuilder.toString());  \n        } catch (Exception e) {  \n            log.info("Serialization exception: " + e.getMessage());  \n        }  \n    }  \n  \n    // Obtain the output data from the data processing execution unit  \n    public void deserialize(State state, DataInputStream in) {  \n        try {  \n            String string = in.readUTF();  \n            state.scale = Integer.parseInt(String.valueOf(string.charAt(0)));  \n            StringBuilder stringBuilder = new StringBuilder(string.substring(2));  \n            state.stringBuilder = stringBuilder;  \n        } catch (Exception e) {  \n            log.info("Deserialization exception: " + e.getMessage());  \n        }  \n    }  \n  \n    // The aggregation execution unit merges the processing results of data under certain aggregation conditions for a given key. The state1 parameter is the initialized instance during the first merge of each key  \n    public void merge(State state1, State state2) {  \n        try {  \n            state1.scale = state2.scale;  \n            state1.stringBuilder.append(state2.stringBuilder.toString());  \n        } catch (Exception e) {  \n            log.info("Merge result exception: " + e.getMessage());  \n        }  \n    }  \n  \n    // Output the final result after merging the data for each key  \n    public Double getValue(State state) {  \n        try {  \n            String[] strings = state.stringBuilder.toString().split(",");  \n            double[] doubles = new double[strings.length];  \n            for (int i = 0; i < strings.length - 1; i++) {  \n                doubles[i] = Double.parseDouble(strings[i + 1]);  \n            }  \n  \n            Arrays.sort(doubles);  \n            double n = doubles.length;  \n            if (n == 0) {  \n                return 0.0;  \n            }  \n            double index = (n - 1) / 2.0;  \n  \n            int low = (int) Math.floor(index);  \n            int high = (int) Math.ceil(index);  \n  \n            double value = low == high ? (doubles[low] + doubles[high]) / 2 : doubles[high];  \n  \n            BigDecimal decimal = new BigDecimal(value);  \n            return decimal.setScale(state.scale, BigDecimal.ROUND_HALF_UP).doubleValue();  \n        } catch (Exception e) {  \n            log.info("Calculation exception: " + e.getMessage());  \n        }  \n        return 0.0;  \n    }  \n  \n    // Executed after each execution unit completes  \n    public void destroy(State state) {  \n    }  \n}\n')),(0,r.yg)("h3",{id:"udtf-1"},"UDTF"),(0,r.yg)("p",null,"Similar to UDFs, UDTFs require users to implement an ",(0,r.yg)("inlineCode",{parentName:"p"},"evaluate")," method. However, the return value of a UDTF must be of the Array type."),(0,r.yg)("p",null,"Additionally, table functions in Doris may exhibit different behaviors due to the ",(0,r.yg)("inlineCode",{parentName:"p"},"_outer")," suffix. For more details, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers-outer"},"OUTER combinator"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-JAVA"},"public class UDTFStringTest {\n    public ArrayList<String> evaluate(String value, String separator) {\n        if (value == null || separator == null) {\n            return null;\n        } else {\n            return new ArrayList<>(Arrays.asList(value.split(separator)));\n        }\n    }\n}\n")),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("h3",{id:"loading-static-variables"},"Loading static variables"),(0,r.yg)("p",null,"Currently, in Doris, executing a UDF function, e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"select udf(col) from table"),", will load the udf.jar package for each concurrent instance, and unload the udf.jar package when the instance ends. If the udf.jar file needs to load a file of several hundred MBs, the memory usage will increase sharply due to concurrency, potentially leading to OOM (Out of Memory)."),(0,r.yg)("p",null,"The solution is to split the resource loading code, generate a separate jar package, and have other packages directly reference this resource jar package."),(0,r.yg)("p",null,"Assume the files have been split into DictLibrary and FunctionUdf."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Compile the DictLibrary file separately to generate an independent jar package, resulting in a resource file DictLibrary.jar:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"javac ./DictLibrary.java\njar -cf ./DictLibrary.jar ./DictLibrary.class\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class DictLibrary {\n    private static HashMap<String, String> res = new HashMap<>();\n\n    static {\n        // suppose we built this dictionary from a certain local file.\n        res.put("key1", "value1");\n        res.put("key2", "value2");\n        res.put("key3", "value3");\n        res.put("0", "value4");\n        res.put("1", "value5");\n        res.put("2", "value6");\n    }\n\n    public static String evaluate(String key) {\n        if (key == null) {\n            return null;\n        }\n        return res.get(key);\n    }\n}\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class FunctionUdf {\n    public String evaluate(String key) {\n        String value = DictLibrary.evaluate(key);\n        return value;\n    }\n}\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Then compile the FunctionUdf file, directly referencing the resource package from the previous step, resulting in the FunctionUdf.jar package:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"javac -cp ./DictLibrary.jar ./FunctionUdf.java\njar -cvf ./FunctionUdf.jar ./FunctionUdf.class\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"After the above two steps, you will get two jar packages. To allow the resource jar package to be referenced by all concurrent instances, place it in the deployment path ",(0,r.yg)("inlineCode",{parentName:"p"},"fe/custom_lib")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"be/custom_lib"),". After the restarting, it will be loaded with the JVM startup.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Finally, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"create function")," statement to create a UDF function"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE FUNCTION java_udf_dict(string) RETURNS string PROPERTIES (\n "symbol"="org.apache.doris.udf.FunctionUdf",\n "always_nullable"="true",\n "type"="JAVA_UDF"\n);\n')))),(0,r.yg)("p",null,"In this loading mode, both FunctionUdf.jar and DictLibrary.jar are in the custom_lib path of FE and BE. This way, the packages will be loaded and released with the service startup and shutdown."),(0,r.yg)("p",null,"You can also customize the path to FunctionUdf.jar using file:///, but only under custom_lib."),(0,r.yg)("h2",{id:"usage-notes"},"Usage Notes"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Complex data types (HLL, Bitmap) are not supported.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Users are currently allowed to specify the maximum JVM heap size. The configuration item is the ",(0,r.yg)("inlineCode",{parentName:"p"},"-Xmx")," part of ",(0,r.yg)("inlineCode",{parentName:"p"},"JAVA_OPTS")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"be.conf"),". The default is 1024m. If you need to aggregate data, it is recommended to increase this value to enhance performance and reduce the risk of memory overflow.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For Char type UDFs, use the String type when creating the function.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Due to issues with JVM loading classes with the same name, do not use multiple classes with the same name as UDF implementations simultaneously. If you want to update a UDF with a class of the same name, you need to restart BE to reload the classpath."))))}g.isMDXComponent=!0}}]);