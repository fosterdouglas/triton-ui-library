<docs>

```jsx noeditor

<div>

  <b-alert fade show dismissible variant="info" class="customAlert alertInfo">
    <h5 class="alert-heading">Foster's Task List
      <i class="p-1 pt-2 mb-1 fal fa-xs fa-exclamation-triangle text-info align-middle"></i>
    </h5>
    <hr/>
      <ul>
        <li class="alertListItem">- Add additional variations</li>
        <li class="alertListItem">- Distribute components into separate files and rename</li>
        <li class="alertListItem">- <del>Style properly</del> <i class="iconConfirm"></i></li>
      </ul>
  </b-alert>

</div>
```

<h3>Primary</h3>
<p></p>

```js
<template>

    <b-breadcrumb :items="items"></b-breadcrumb>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Sample Agency',
            href: '#'
          },
          {
            text: 'Sample Client',
            href: '#'
          },
          {
            text: 'Current Client or User',
            active: true
          }
        ]
      }
    }
  }
</script>
```

</docs>
