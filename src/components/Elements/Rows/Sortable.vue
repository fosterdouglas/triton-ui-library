<docs>

<h3>Sortable</h3>
<p>For adding, removing, and moving items between two or more distinct categories. Support for drag-and-drop (as in the example), or using icon buttons to move items. This component function uses the jQuery UI library <a class="text-info underline" href="https://api.jqueryui.com/sortable/" target="_blank">Sortable Widget</a>.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
  <b-row>
    <b-col class="fixedGroup">
      <b-container id="sortable1" class="containsRowItems connectedSortable" fluid>
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
                  <p>Sortable Item Group 1</p>
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
                  <p>Sortable Item Group 1</p>
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
                  <p>Sortable Item Group 1</p>
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
                  <p>Sortable Item Group 1</p>
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
                  <p>Sortable Item Group 1</p>
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
                  <p>Sortable Item Group 1</p>
                </div>

                <div class="rowItemSuffix">
                  <i class="iconGrab"></i>
                </div>

              </div>

            </b-button>
          </b-col>
        </b-row>

      </b-container>

    </b-col>

    <b-col cols="1" align-self="center" class="text-center">
        <i class="iconSort fa-rotate-90 fa-lg"></i>
    </b-col>

    <b-col class="fixedGroup">
      <b-container id="sortable2" class="containsRowItems connectedSortable" fluid>
        <b-row>
          <b-col>

            <b-button
              block
              class="rowItem rowStandard rowItemHover cursorDefault"
              variant="none"
              onclick="this.blur();"
            >

              <div class="rowItemContent text-secondary">

                <div class="rowItemPrefix">

                </div>

                <div class="rowItemText">
                  <p>Sortable Item Group 2</p>
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

              <div class="rowItemContent text-secondary">

                <div class="rowItemPrefix">

                </div>

                <div class="rowItemText">
                  <p>Sortable Item Group 2</p>
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

              <div class="rowItemContent text-secondary">

                <div class="rowItemPrefix">

                </div>

                <div class="rowItemText">
                  <p>Sortable Item Group 2</p>
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

              <div class="rowItemContent text-secondary">

                <div class="rowItemPrefix">

                </div>

                <div class="rowItemText">
                  <p>Sortable Item Group 2</p>
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

              <div class="rowItemContent text-secondary">

                <div class="rowItemPrefix">

                </div>

                <div class="rowItemText">
                  <p>Sortable Item Group 2</p>
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

              <div class="rowItemContent text-secondary">

                <div class="rowItemPrefix">

                </div>

                <div class="rowItemText">
                  <p>Sortable Item Group 2</p>
                </div>

                <div class="rowItemSuffix">
                  <i class="iconGrab"></i>
                </div>

              </div>

            </b-button>

          </b-col>
        </b-row>

      </b-container>

    </b-col>

  </b-row>
</b-container>

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

</docs>
