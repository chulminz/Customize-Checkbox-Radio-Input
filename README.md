체크박스, 라디오 Input 요소 UI 디자인 변경
=====

폼 요소 중 체크박스와 라디오 버튼의 UI 디자인 변경을 위한 플러그인 입니다. 기본 input 요소는 숨기고 input과 연결된 label 에 배경 이미지로 체크박스와 라디오 버튼을 표현합니다.

HTML
-----
각 input 요소에 label 을 연결합니다.
- checkbox 에 연결된 label은 `class="type-checkbox"`
- radio 에 연결된 label은 `class="type-radio"`


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
CSS
-----
`label.type-checkbox`, `label.type-radio` 에 스타일 선언하며, input 요소가 checked 되었을 때 보여질 스타일은 `label.type-checkbox.checked`, `label.type-radio.checked`에 선언합니다.
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

Javascript
-----

```javascript
$("input[type=checkbox], input[type=radio]").customizeCRInput();
```

