<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Animate expanding component dropdown carat</li>
        <li class="alertListItem">- Distribute components into separate files</li>
        <li class="alertListItem">- Convert checkbox, switch, radio to BUTTONS for WCAG selection highlight.</li>
      </ul>
  </b-alert>

</div>
```

<h3>Standard</h3>


```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Here is an example of the standard row element.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>The app will utilize these for information and organization.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Boolean</h3>


```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-checkbox">
            <input id="customCheck1" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck1"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">The checkbox can be used to set something as true or false.</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-checkbox">
            <input id="customCheck2" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck2"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">Think of it as a Yes or No answer to the accompanying text.</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>
  </div>
</template>
```

<h3>Clickable</h3>


```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowStandard rowClickable cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconSettings iconHover"></i>
        </div>

        <div class="rowItemText">
          <p>Sometimes row elements need to be clickable.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowClickable cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconSettings iconHover"></i>
        </div>

        <div class="rowItemText">
          <p>Typically, clicking on this will lead to a different page or view.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Enable/Disable</h3>


```js
<template>
  <div>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" />
            <label class="custom-control-label cursorPointer" for="customSwitch1"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p>The toggle allows a given parameter to be enabled or disabled.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover rowDisabled cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-switch">
            <input checked disabled type="checkbox" class="custom-control-input custom-control-input-disabled" id="customSwitch2" />
            <label class="custom-control-label custom-control-label-disabled cursorDisabled" for="customSwitch2"></label>
          </div>
        </div>

        <div class="rowItemText rowDisabledText">
          <p>Sometimes the toggle itself is disabled entirely, as a result of other settings.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Expanding
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>
<span class="text-info">Javascript to be added for restyling on "open" state.</span>
</p>


```js
<template>

  <div>

      <b-button
        block
        class="rowItem rowExpandable rowItemHover cursorDefault"
        variant="none"
        v-b-toggle.collapse-0
        onclick="this.blur();"
      >

        <div class="rowItemContent">

          <div class="rowItemPrefix">
            <i class="iconDash"></i>
          </div>

          <div class="rowItemText">
            <p>A common iteration of the row element is the expanding type.</p>
          </div>

          <div class="rowItemSuffix">
            <i class="iconChevron"></i>
          </div>

        </div>

      </b-button>

      <b-collapse id="collapse-0">
        <b-card class="rowExpandableContent">Information!</b-card>
      </b-collapse>


      <b-button
        block
        class="rowItem rowExpandable rowItemHover cursorDefault"
        variant="none"
        v-b-toggle.collapse-1
        onclick="this.blur();"
      >

        <div class="rowItemContent">

          <div class="rowItemPrefix">
            <i class="iconDash"></i>
          </div>

          <div class="rowItemText">
            <p>Click me to expand or collapse a linked group of data.</p>
          </div>

          <div class="rowItemSuffix">
            <i class="iconChevron"></i>
          </div>

        </div>

      </b-button>

      <b-collapse id="collapse-1">
        <b-card class="rowExpandableContent">Information!</b-card>
      </b-collapse>


      <b-button
        block
        class="rowItem rowExpandable rowItemHover cursorDefault"
        variant="none"
        v-b-toggle.collapse-2
        onclick="this.blur();"
      >

        <div class="rowItemContent">

          <div class="rowItemPrefix">
            <i class="iconDash"></i>
          </div>

          <div class="rowItemText">
            <p>This is used to store and organize large amounts of information.</p>
          </div>

          <div class="rowItemSuffix">
            <i class="iconChevron"></i>
          </div>

        </div>

      </b-button>

      <b-collapse visible id="collapse-2">
            <b-card class="rowExpandableContent">
              <b-button
                block
                class="rowItem rowExpandable rowItemHover cursorDefault"
                variant="none"
                v-b-toggle.collapse-2-inner
                onclick="this.blur();"
              >

                <div class="rowItemContent">

                  <div class="rowItemPrefix">
                    <i class="iconDash"></i>
                  </div>

                  <div class="rowItemText">
                    <p>These can also be nested!</p>
                  </div>

                  <div class="rowItemSuffix">
                    <i class="iconChevron"></i>
                  </div>

                </div>

              </b-button>

              <b-collapse id="collapse-2-inner" class="">
                <b-card class="rowExpandableContent">Look! Even more information!</b-card>
              </b-collapse>

            </b-card>

      </b-collapse>

    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showCollapse1: false,
        showCollapse2: true
      }
    }
  }
</script>
```



<h3>Highlighted</h3>
<p>The highlighted element can be used for an item that's particularly important or needs focus. It also has additional margin spacing on the top and bottom to set it apart. </p>

```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowStandard rowItemHover rowHighlightSecondary cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent text-secondary">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>This one is highlighted in yellow to give additional focus or importance.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover rowHighlightConfirm cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent text-confirm">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>A green highlight could be used to confirm a correct or valid option.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover rowHighlightWarning cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent text-warning">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>While a red highlight might indicate an error.</p>
        </div>

        <div class="rowItemSuffix">

        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Moveable
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>
<p>This component function uses the jQuery UI library <a class="text-info underline" href="https://api.jqueryui.com/sortable/" target="_blank">Sortable Widget</a>.
  For it to function properly, the parent container (typically a DIV) must have the proper ID assigned to it.
</p>

```js
<template>
  <div id="moveable">

      <b-button
        block
        class="rowItem rowStandard rowItemHover cursorDefault"
        variant="none"
        onclick="this.blur();"
      >

        <div class="rowItemContent">

          <div class="rowItemPrefix">
            <i class="iconDash"></i>
          </div>

          <div class="rowItemText">
            <p>Click on me and drag me to another position in this list!</p>
          </div>

          <div class="rowItemSuffix">

          </div>

        </div>

      </b-button>

      <b-button
        block
        class="rowItem rowStandard rowItemHover cursorDefault"
        variant="none"
        onclick="this.blur();"
      >

        <div class="rowItemContent">

          <div class="rowItemPrefix">
            <i class="iconDash"></i>
          </div>

          <div class="rowItemText">
            <p>A list that can be organized, wow.</p>
          </div>

          <div class="rowItemSuffix">

          </div>

        </div>

      </b-button>

      <b-button
        block
        class="rowItem rowStandard rowItemHover cursorDefault"
        variant="none"
        onclick="this.blur();"
      >

        <div class="rowItemContent">

          <div class="rowItemPrefix">
            <i class="iconDash"></i>
          </div>

          <div class="rowItemText">
            <p>This function is useful in a variety of applications.</p>
          </div>

          <div class="rowItemSuffix">

          </div>

        </div>

      </b-button>

  </div>
</template>
<script>
$(function() {
  $( "#moveable" ).sortable({
    cancel: '', //need this to function with b-button
    opacity: .7,
    placeholder: 'ui-state-highlight', //custom style for placeholder while dragging
    appendTo: "div"
  });
  $( "#sortable" ).disableSelection();
});

export default {
}
</script>
```


<h3>Radio List
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p><span class="text-info">Needs desciption to distinguish it from Radio Group for forms.</span></p>

```js
<template>
  <div>

    <b-button
      block
      class="rowItem rowTitle cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">



        <div class="rowItemText">
          <p class="mb-0">Please Choose From This Radio List Of Options:</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-radio">
            <input id="customRadio1" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio1"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">A radio list is used to require a single selection from many options.</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-radio">
            <input id="customRadio2" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio2"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">You only get to choose one...</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <div class="custom-control custom-radio">
            <input id="customRadio3" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio3"></label>
          </div>
        </div>

        <div class="rowItemText">
          <p class="mb-0">So make a good decision!</p>
        </div>

        <div class="rowItemSuffix">
        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Sortable
<i class="p-1 mb-1 fal fa-xs fa-exclamation-triangle text-info bg-white align-middle"></i>
</h3>
<p>For adding, removing, and moving items between two or more distinct categories. Functions can be implemented for drag-and-drop (as in the example), or using icon buttons to move items. This component function uses the jQuery UI library <a class="text-info underline" href="https://api.jqueryui.com/sortable/" target="_blank">Sortable Widget</a>.</p>

```js
<template>
  <div class="row">
    <div id="sortable1" class="sortableGroup connectedSortable">

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 1</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 1</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 1</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 1</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 1</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 1</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

    </div>

    <div class="col-auto align-self-center">
      <i class="iconTrade fa-lg"></i>
    </div>

    <div id="sortable2" class="sortableGroup connectedSortable">

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent text-secondary">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 2</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow fa-rotate-180 iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent text-secondary">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 2</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow fa-rotate-180 iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent text-secondary">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 2</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow fa-rotate-180 iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent text-secondary">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 2</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow fa-rotate-180 iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent text-secondary">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 2</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow fa-rotate-180 iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

        <b-button
          block
          class="rowItem rowStandard rowItemHover cursorDefault"
          variant="none"
          onclick="this.blur();"
        >

          <div class="rowItemContent text-secondary">

            <div class="rowItemPrefix">
              <i class="iconDash"></i>
            </div>

            <div class="rowItemText">
              <p>Sortable Item Group 2</p>
            </div>

            <div class="rowItemSuffix">
              <b-button onclick="this.blur()" variant="outline-primaryfade" class="btnSmall cursorDefault text-dark">
                <i class="iconArrow fa-rotate-180 iconBorderMini"></i>
              </b-button>
              <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
                <i class="iconRemove iconBorderMini"></i>
              </b-button>
            </div>

          </div>

        </b-button>

    </div>

  </div>

</template>
<script>
  $( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable",
      cancel: '', //need this to function with b-button
      opacity: .7,
      placeholder: 'ui-state-highlight', //custom style for placeholder while dragging
      scroll: false,
      appendTo: "div",
      helper: "clone",
      tolerance: "pointer"
    }).disableSelection();
  } );

export default {
}
</script>
```


<h3>Status
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>

```js
<template>
  <div>
    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Here is an example of the standard row element.</p>
        </div>

        <div class="rowItemSuffix">
          Submitted
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Here is an example of the standard row element.</p>
        </div>

        <div class="rowItemSuffix text-secondary">
          In Progress
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Here is an example of the standard row element.</p>
        </div>

        <div class="rowItemSuffix text-warning">
          Errors
        </div>

      </div>

    </b-button>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <p>Here is an example of the standard row element.</p>
        </div>

        <div class="rowItemSuffix text-confirm">
          Completed
        </div>

      </div>

    </b-button>

  </div>
</template>
```

<h3>Uploaded File
<i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>[Needs desciption...]</p>


```js
<template>
  <div>

    <b-button
      block
      class="rowItem rowStandard rowItemHover cursorDefault"
      variant="none"
      onclick="this.blur();"
    >

      <div class="rowItemContent">

        <div class="rowItemPrefix">
          <i class="iconDash"></i>
        </div>

        <div class="rowItemText">
          <div>
            <i class="iconFolderOpen"></i>
            <abbr title="background-check-text.pdf" class="initialism">background-check-text.pdf</abbr>
          </div>
        </div>

        <div class="rowItemSuffix">
          <div>
            <b-button onclick="this.blur()" variant="outline-warningfade" class="btnSmall cursorDefault text-warning">
              <i class="iconRemove iconBorderMini"></i>
            </b-button>
          </div>
        </div>

      </div>

    </b-button>

  </div>
</template>
```
</docs>
