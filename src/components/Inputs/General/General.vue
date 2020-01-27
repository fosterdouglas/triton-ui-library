<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Distribute components into separate files</li>
      </ul>
  </b-alert>

</div>
```

<h3>Checkbox</h3>
<p>A general-use checkbox that can be implemented in various ways, but is primarily seen used for group selection of items with <a href="../../#/Elements/Tables">Tables</a>. In many cases, the Toggle element is a preferrable choice for clearer UI interaction.</p>

```js
<template>
<div>

  <div class="custom-control custom-checkbox">
    <input id="customCheck1" class="custom-control-input" type="checkbox"/>
    <label class="custom-control-label cursorPointer" for="customCheck1"></label>
  </div>

</div>
</template>

<script>
$(function () {
  $('#customCheck2').prop('checked', true)
});
  export default {
}
</script>
```

<h3>Date of Birth
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>
<span class="text-info">~Feature in progress~</span>
</p>

```js
<template>
  <div class="row">
    <div class="custom-form-control col-3">
      <b-form-input type="date" class="custom-form-control">
    </div>
  </div>
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
<span class="text-info">~Feature in progress~</span>
</p>

```js
<template>
  <div>
    <div class="datepicker-trigger">


      <b-input
        class="col-3 custom-form-control"
        type="text"
        id="datepicker-trigger"
        placeholder="Select dates"
        autocomplete="off"
        :value="formatDates(dateOne, dateTwo)"
      />

      <AirbnbStyleDatepicker
        :trigger-element-id="'datepicker-trigger'"
        :mode="'range'"
        :fullscreen-mobile="true"
        :months-to-show="2"
        :close-after-select="false"
        :offset-y="-1"
        :show-shortcuts-menu-trigger="false"
        :show-action-buttons="true"
        :date-one="dateOne"
        :date-two="dateTwo"
        @date-one-selected="val => { dateOne = val }"
        @date-two-selected="val => { dateTwo = val }"
      />
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  data() {
    return {
      dateFormat: 'D MMM YYYY',
      dateOne: '',
      dateTwo: ''
    }
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    }
  }
}
</script>
```

<h3>Filter Dropdown</h3>
<p></p>

```js
<template>
  <div>
    <b-dropdown  variant="outline-primaryfade" class="dropdownGroup">
      <template v-slot:button-content>
        <i class="iconFilter"></i>
      </template>
      <b-dropdown-form>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch10" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch10">
            <b-badge class="supportText pl-2" variant="-">Clients</b-badge>
          </label>
        </div>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch11" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch11">
            <b-badge class="supportText pl-2" variant="-">Agents</b-badge>
          </label>
        </div>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch12" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch12">
            <b-badge class="supportText pl-2" variant="-">Users</b-badge>
          </label>
        </div>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch13" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch13">
            <b-badge class="supportText pl-2" variant="-">Deactivated Users</b-badge>
          </label>
        </div>
      </b-dropdown-form>
    </b-dropdown>
    <b-dropdown  variant="outline-primaryfade" class="dropdownGroup">
      <template v-slot:button-content>
        <i class="iconFilter"></i>
        <b-badge variant="dark" class="btnIconRight">+3</b-badge>
      </template>
      <b-dropdown-form>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch14" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch14">
            <b-badge class="supportText" variant="-">Clients</b-badge>
          </label>
        </div>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch15" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch15">
            <b-badge class="supportText" variant="-">Agents</b-badge>
          </label>
        </div>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch16" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch16">
            <b-badge class="supportText" variant="-">Users</b-badge>
          </label>
        </div>
        <div class="custom-control custom-switch d-inline-block">
          <input id="customSwitch17" class="custom-control-input" type="checkbox" />
          <label class="custom-control-label cursorPointer" for="customSwitch17">
            <b-badge class="supportText" variant="-">Deactivated Users</b-badge>
          </label>
        </div>
      </b-dropdown-form>
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


<h3>Filter Toggles</h3>
<p>Typically attached to a Search Box, this group of components is used to filter an attached data set. Uses Toggles and Support Text, and will support a <span class="text-info">~clear filters button~</span>.</p>

```js
<template>
  <div>

    <div class="custom-control custom-switch">
      <input id="customSwitch0" class="custom-control-input" type="checkbox" />
      <label class="custom-control-label cursorPointer" for="customSwitch0">
        <b-badge class="supportText" variant="-">Clients</b-badge>
      </label>
    </div>

    <div class="custom-control custom-switch">
      <input id="customSwitch1" class="custom-control-input" type="checkbox" />
      <label class="custom-control-label cursorPointer" for="customSwitch1">
        <b-badge class="supportText" variant="-">Agents</b-badge>
      </label>
    </div>

    <div class="custom-control custom-switch">
      <input id="customSwitch2" class="custom-control-input" type="checkbox" />
      <label class="custom-control-label cursorPointer" for="customSwitch2">
        <b-badge class="supportText" variant="-">Users</b-badge>
      </label>
    </div>

    <div class="custom-control custom-switch">
      <input id="customSwitch3" class="custom-control-input" type="checkbox" />
      <label class="custom-control-label cursorPointer" for="customSwitch3">
        <b-badge class="supportText" variant="-">Deactivated Users</b-badge>
      </label>
    </div>

  </div>
</template>

<script>
  export default {
}
</script>
```

<h3>Select Dropdown</h3>
<p></p>

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
<p><span class="text-info">~Use case undetermined~</span></p>

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


<h3>Toggle</h3>
<p>[Needs desciption...]</p>

```js
<template>
  <div>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch4" />
      <label class="custom-control-label cursorPointer" for="customSwitch4"></label>
    </div>

    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch5" />
      <label class="custom-control-label cursorPointer" for="customSwitch5"></label>
    </div>
  </div>
</template>
<script>
$(function () {
  $('#customSwitch4').prop('checked', true)
});
export default {

}
</script>
```

</docs>
