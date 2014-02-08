Jasno - a tiny JavaScript framework
===================================

``` javascript
<script type="text/javascript" src="jasno.js"></script>
```


Events
------
* *bool* ```Jasno.addEvent``` (el, type, handler);
* *false* ```Jasno.cancelEvent``` (event);
* *element* ```Jasno.getSrcElement``` (event);



HTML class handling
-------------------
* *void* ```Jasno.addClass``` (el, className);
* *void* ```Jasno.removeClass``` (el, className);
* *bool* ```Jasno.hasClass``` (el, className);



CSS
---
* *string* ```Jasno.getCss``` (el, propertyName);


JavaScript
----------
* *bool* ```Jasno.empty``` (data);
	<br>Is given value empty (```undefined```, ```null```, empty collection/array, empty object)?


------------------------------------------------

Author: Jan Pecha (http://janpecha.iunas.cz/), 2012
<br>License: New BSD License
