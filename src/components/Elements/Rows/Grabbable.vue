<docs>

<h3>Grabbable</h3>
<p>These row elements can be grabbed and rearranged by the user. This component function uses the jQuery UI library <a class="text-info underline" href="https://api.jqueryui.com/sortable/" target="_blank">Sortable Widget</a>.
  For it to function properly, the parent container (typically a ```b-container```) must have the proper ID assigned to it.
</p>

```js
<template>
    <b-container id="moveable4" class="containsRowItems" fluid>
      <b-row>
        <b-col>
          <b-button
            block
            class="rowItem rowStandard rowItemHover cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">

              </div>

              <div class="rowItemText">
                <p>Click on me and drag me to another position in this list!</p>
              </div>

              <div class="rowItemSuffix">
                <i class="iconGrab"></i>
              </div>

            </div>

          </b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col>

          <b-button
            block
            class="rowItem rowStandard rowItemHover cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">

              </div>

              <div class="rowItemText">
                <p>A list that can be organized, wow.</p>
              </div>

              <div class="rowItemSuffix">
                <i class="iconGrab"></i>
              </div>

            </div>

          </b-button>

        </b-col>
      </b-row>

      <b-row>
        <b-col>

          <b-button
            block
            class="rowItem rowStandard rowItemHover cursorDefault"
            variant="none"
            onclick="this.blur();"
          >

            <div class="rowItemContent">

              <div class="rowItemPrefix">

              </div>

              <div class="rowItemText">
                <p>This function is useful in a variety of applications.</p>
              </div>

              <div class="rowItemSuffix">
                <i class="iconGrab"></i>
              </div>

            </div>

          </b-button>

        </b-col>
      </b-row>

    </b-container>

</template>
<script>
$(function() {
  $( "#moveable4" ).sortable({
    cancel: '', //need this to function with b-button
    opacity: .7,
    placeholder: 'ui-state-highlight', //custom style for placeholder while dragging
    appendTo: "div"
  }).disableSelection();
});

export default {
}
</script>
```

</docs>
