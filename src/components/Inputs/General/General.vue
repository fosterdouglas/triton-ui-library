<docs>

<h3>Date of Birth</h3>
<p>The DOB input is used to make filling out this type of data simpler and clearer. There is also a version of this specific to <a href="../../#Inputs/Forms">Forms</a>.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col cols="2" class="custom-form-control">
        <b-form-input type="date" class="custom-form-control">
      </b-col>
    </b-row>
  </b-container>

</template>
<script>
  export default {
}
</script>
```

<h3>Date Range Picker
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>
<span class="text-info">~Recently updated by the framework, will be refactoring~</span>
</p>

```js
<template>

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

<h3>Filter Dropdown
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>This dropdown is typically used to filter search results, but could also be used to filter a set of row items, data set, or other grouping. It can also be shown without a button, as seen below. <span class="text-info">~Feature in progress, visibility icons will be clickable/toggleable~</span></p>

```js
<template>
  <div>
    <b-dropdown  variant="outline-primaryfade" class="dropdownGroup">
      <template v-slot:button-content>
        <i class="iconFilter"></i>
      </template>
      <b-container class="containsRowItems" fluid>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Clients</b-badge>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Agents</b-badge>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Users</b-badge>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Deactivated Users</b-badge>
          </b-col>
        </b-row>

      </b-container>
    </b-dropdown>

    <b-dropdown  variant="outline-primaryfade" class="dropdownGroup">
      <template v-slot:button-content>
        <i class="iconFilter"></i>
        <b-badge variant="dark">+3</b-badge>
      </template>
      <b-container class="containsRowItems" fluid>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Clients</b-badge>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Agents</b-badge>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Users</b-badge>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="d-inline-flex">
            <i class="iconVisible text-dark fa-lg"></i>
            <b-badge class="supportText" variant="-">Deactivated Users</b-badge>
          </b-col>
        </b-row>

      </b-container>

    </b-dropdown>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        // Close the menu and (by passing true) return focus to the toggle button
        this.$refs.dropdown.hide(true)
      }
    }
  }
</script>
```


<h3>Filtering</h3>
<p>Typically attached to a Search Box, this group of buttons is used to filter a specific data set. Uses Toggles and Support Text, and may support a <span class="text-info">~clear filters button~</span> in the future.</p>

```js
<template>
  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Clients</b-badge>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Agents</b-badge>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Users</b-badge>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="d-inline-flex">
        <i class="iconVisible text-dark fa-lg"></i>
        <b-badge class="supportText" variant="-">Deactivated Users</b-badge>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  export default {
}
</script>
```

<h3>Input Checkbox</h3>
<p>A general-use checkbox that can be implemented in various ways, but is primarily seen used for group selection of items with <a href="../../#/Elements/Tables">Tables</a>. It can be mixed and matched in a given group with the Input Toggle.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>
    <b-row>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-dark"
          class="btnSmall btnCheck btnStandard"
          onclick="this.blur()"
         >
          <div class="custom-control custom-checkbox">
            <input id="customCheck1" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck1"></label>
          </div>
        </b-button>

      </b-col>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnCheck btnStandard"
          onclick="this.blur()"
         >
          <div class="custom-control custom-checkbox">
            <input checked id="customCheck2" class="custom-control-input" type="checkbox"/>
            <label class="custom-control-label cursorPointer" for="customCheck2"></label>
          </div>
        </b-button>

      </b-col>
    </b-row>

  </b-container>

</template>
<script>
$(function () {
  $('#customCheck2').prop('checked', true)
});
  export default {
}
</script>
```

<h3>Input Radio</h3>
<p>Used to make a single choice from multiple options. Generally it should not be mixed in a given group with the Input Switch or Input Checkbox.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnRadio"
          onclick="this.blur()"
         >
          <div class="custom-control custom-radio">
            <input checked id="customRadio1" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio1"></label>
          </div>
        </b-button>

      </b-col>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnRadio"
          onclick="this.blur()"
         >
          <div class="custom-control custom-radio">
            <input id="customRadio2" class="custom-control-input" type="radio" name="radio"/>
            <label class="custom-control-label cursorPointer" for="customRadio2"></label>
          </div>
        </b-button>

      </b-col>
    </b-row>

  </b-container>

</template>
<script>
export default {
}
</script>
```

<h3>Input Toggle</h3>
<p>A toggle for enabling and disabling functions. It can be mixed and matched in a given group with the Input Checkbox.</p>

```js
<template>

  <b-container class="containsRowItems" fluid>

    <b-row>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnSwitch"
          onclick="this.blur()"
         >
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch4" />
            <label class="custom-control-label cursorPointer" for="customSwitch4"></label>
          </div>
        </b-button>

      </b-col>
      <b-col class="prependButton">

        <b-button
          :pressed="false"
          variant="outline-primaryfade"
          class="btnSmall btnStandard btnSwitch"
          onclick="this.blur()"
         >
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch5" />
            <label class="custom-control-label cursorPointer" for="customSwitch5"></label>
          </div>
        </b-button>

      </b-col>
    </b-row>

  </b-container>

</template>
<script>
$(function () {
  $('#customSwitch5').prop('checked', true)
});
export default {

}
</script>
```


<h3>Select Dropdown</h3>
<p>A general-use dropdown. Typically used for a set of less than 15 options. Consider an alternative (potentially the Select List) if working with more options.</p>

```js
<template>
  <div>
    <b-row>
      <b-col cols="6">
        <b-input-group>
          <select name="colors" id="chooser">
            <option disabled selected>Choose One...</option>
            <option>Pink</option>
            <option>Teal</option>
            <option>Orange</option>
            <option>Black</option>
            <option>Banana</option>
          </select>
        </b-input-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  $( function() {
    $( "#chooser" ).selectmenu();
  } );
  export default {
}
</script>
```


<h3>Select List
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>A scrolling list that can have categories, used for choosing a single option. <span class="text-info">~Use case currently undetermined, awaiting a redesign~</span></p>

```js

<div class="row">

  <div class="col" title="Favourite Color?">
    <b-form-select :select-size="4" class="form-control cursorDefault" type="text">
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </b-form-select>
  </div>

  <div class="col">
    <b-form-select disabled :select-size="4" class="form-control cursorDisabled" type="text">
      <option disabled>Favourite Color?</option>
      <option class="options">Pink</option>
      <option selected class="options">Teal</option>
      <option class="options">Orange</option>
      <option class="options">Black</option>
      <option class="options">Banana</option>
    </b-form-select>
  </div>

</div>
```


</docs>
