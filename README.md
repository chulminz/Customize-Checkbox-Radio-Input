# Customize Checkbox Radio Input

## HTML
```html
	<ul>
		<li><input id="chk_1" type="checkbox" name="chk" value="1"><label for="chk_1" class="type-checkbox">Apple1</label></li>
		<li><input id="chk_2" type="checkbox" name="chk" value="2"><label for="chk_2" class="type-checkbox">Apple2</label></li>
		<li><input id="chk_3" type="checkbox" name="chk" value="3"><label for="chk_3" class="type-checkbox">Apple3</label></li>
		<li><input id="chk_4" type="checkbox" name="chk" value="4"><label for="chk_4" class="type-checkbox">Apple4</label></li>
	</ul>

	<ul>
		<li><input id="rdo_1" type="radio" name="rdo" value="1"><label for="rdo_1" class="type-radio">Banana1</label></li>
		<li><input id="rdo_2" type="radio" name="rdo" value="2"><label for="rdo_2" class="type-radio">Banana2</label></li>
		<li><input id="rdo_3" type="radio" name="rdo" value="3"><label for="rdo_3" class="type-radio">Banana3</label></li>
		<li><input id="rdo_4" type="radio" name="rdo" value="4"><label for="rdo_4" class="type-radio">Banana4</label></li>
	</ul>
```
## CSS

```css
input[type=radio],
input[type=checkbox] {
	position:absolute;
	left:0; top:0;
	width:1px; height:1px;
	overflow:hidden;
	visibility:hidden;
}

label.type-checkbox {
	display:inline-block;
	height:24px;
	padding-left:30px;
	line-height:24px;
	background:url(images/checkbox-unchecked.png) no-repeat 0 0;
}

label.type-checkbox.checked {
	background-image:url(images/checkbox-checked.png);
}

label.type-radio {
	display:inline-block;
	height:24px;
	padding-left:30px;
	line-height:24px;
	background:url(images/radio-unchecked.png) no-repeat 0 0;
}

label.type-radio.checked {
	background-image:url(images/radio-checked.png);
}
```

## Javascript

```javascript
$("input[type=checkbox], input[type=radio]").customizeCRInput();
```

