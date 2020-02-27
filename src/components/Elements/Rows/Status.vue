<docs>

<h3>Status Badges</h3>
<p>Badges are a common way to include additional contextual information. Any row element type supports using these.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>
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
              <p>Status badges are used to display a varienty of different details.</p>
            </div>

            <div class="rowItemSuffix">
              <b-badge variant="medium">Inherited</b-badge>
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
              <p>Generally the grey and black ones should be preferred.</p>
            </div>

            <div class="rowItemSuffix">
              <b-badge variant="dark">Submitted</b-badge>
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
              <p>Multiple badges work well.</p>
            </div>

            <div class="rowItemSuffix">
              <b-badge variant="warning">Errors</b-badge>
              <b-badge variant="lightest">Incomplete</b-badge>
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
              <p>Icons can be used on their own.</p>
            </div>

            <div class="rowItemSuffix">
              <b-badge variant="secondary"><i class="iconCrown fas"></i></b-badge>
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
              <p>It also supports some icons alongside text.</p>
            </div>

            <div class="rowItemSuffix">
              <b-badge variant="confirm"><i class="iconConfirm"></i>Completed</b-badge>
            </div>

          </div>

        </b-button>

      </b-col>
    </b-row>

  </b-container>

</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
```

</docs>
