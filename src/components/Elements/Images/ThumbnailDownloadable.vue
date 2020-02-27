<docs>

<h3>Thumbnail Downloadable</h3>
<p>Same as above, but allows the user to click to quickly download the attached image.</p>

```js
<template>
<div>

    <div class="imageThumbnail">
      <a class="img-fluid" href="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" download>
        <div class="centerCropped" style="backgroundImage: url(http://sandcastle.co/cdn/ebydesign/triton/hello-world.png)">
          <b-img class="img-fluid" src="http://sandcastle.co/cdn/ebydesign/triton/hello-world.png" draggable="false"/>
          <i class="iconDownload imgIcon"></i>
        </div>
      </a>
    </div>

</div>
<script>
export default {
}
</script>
```

</docs>
