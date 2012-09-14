/** .jasno - a tiny JavaScript framework
 * 
 * @author		Jan Pecha, <janpecha@email.cz>
 * @version		2012-09-14-1
 * @license		New BSD License
 */

var Jasno = Jasno || {};

/****** HTML Class Operations ******/
Jasno.addClass = function(el, classNm) {
	if(!el.className)
	{
		el.className = classNm;
	}
	else
	{
		el.className = el.className + ' ' + classNm;
	}
}

Jasno.removeClass = function(el, classNm) {
	if(el.className)
	{
		while((pos = el.className.indexOf(classNm)) >= 0)
		{
			el.className = el.className.slice(0, pos) + el.className.slice(pos + classNm.length);
		}
	}
}

Jasno.hasClass = function(el, classNm) {
	return (' ' + el.className + ' ').indexOf(' ' + classNm + ' ') > -1;
}



/****** Events ******/
Jasno.cancelEvent = function(e) {
	e = e ? e : window.event;

	if(e.stopPropagation)
	{
		e.stopPropagation();
	}	

	if(e.preventDefault)
	{
		e.preventDefault();
	}

	e.cancelBubble = true;
	e.cancel = true;
	e.returnValue = false;

	return false;
}

Jasno.addEvent = function(el, type, handler) {
	if(el.addEventListener)
	{
		el.addEventListener(type, handler, false);
		return true;
	}
	else
	{
		if(el.attachEvent)
		{
			return el.attachEvent('on' + type, handler);
		}
	}
	return false;
}

Jasno.getSrcElement = function(e){
	if(window.event)
	{
		return event.srcElement;
	}
	else
	{
		return e.target;	//event.target (OP, FF)
	}
}



/****** CSS ******/
Jasno.getCss = function(el, propertyName) {
	if (obj.currentStyle)
	{
		return obj.currentStyle[styleProperty];
	}
	else if (window.getComputedStyle)
	{
		return document.defaultView.getComputedStyle(obj, null).getPropertyValue(styleProperty);
	}
}

