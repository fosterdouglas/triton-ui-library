<docs>

<h3>Standard - Completed
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>...</p>

```js
<template>
  <div>

    <div class="timeline">
      <div class="row">
        <div class="timelineStatus">
          <i class="timelineStatusIcon iconTrade border-dark text-white bg-dark "></i>
          <span class="timelineStatusText text-dark">Submitted</span>
          <div class="timelinePath border-dark">
          </div>
        </div>
        <div class="timelineDescription">
          <p class="timelineDescriptionDate">December 8th 2019 - 12:22:19</p>
          <p>{{ SubmittedText }}</p>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="row">
        <div class="timelineStatus">
          <i class="timelineStatusIcon iconEllipsis border-secondary text-white bg-secondary "></i>
          <span class="timelineStatusText text-secondary">In Progress</span>
          <div class="timelinePath border-secondary">
          </div>
        </div>
        <div class="timelineDescription">
          <p class="timelineDescriptionDate">December 9th 2019 - 12:22:19</p>
          <p>{{ InProgressText }}</p>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="row">
        <div class="timelineStatus">
          <i class="timelineStatusIcon iconClose border-warning text-white bg-warning "></i>
          <span class="timelineStatusText text-warning">Errors</span>
          <div class="timelinePath border-warning">
          </div>
        </div>
        <div class="timelineDescription">
          <p class="timelineDescriptionDate">December 12th 2019 - 12:22:19</p>
          <p>{{ ErrorsText }}</p>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="row">
        <div class="timelineStatus">
          <i class="timelineStatusIcon iconConfirm border-confirm text-white bg-confirm "></i>
          <span class="timelineStatusText text-confirm">Completed</span>
        </div>
        <div class="timelineDescription">
          <p class="timelineDescriptionDate">December 15th 2019 - 12:22:19</p>
          <p>{{ CompletedText }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        SubmittedText: 'The application has been successfully completed, but has not been assigned to an agent.',
        InProgressText: 'An agent has been assigned, but there is no result available as of yet.',
        ErrorsText: 'There has been an error with the application. Please contact us at help@tritoncanada.ca with questions.',
        CompletedText: 'The check has been completed. A copy of the results can be found somewhere probably.'
      }
    }

}
</script>
```

<h3>Standard - Incomplete
<i title="Under construction!" class="p-1 fal fa-sm fa-exclamation-triangle text-info align-middle"></i>
</h3>
<p>...</p>

```js
<template>
  <div>

    <div class="timeline">
      <div class="row">
        <div class="timelineStatus">
          <i class="timelineStatusIcon iconTrade border-dark text-white bg-dark"></i>
          <span class="timelineStatusText text-dark">Submitted</span>
          <div class="timelinePath border-dark">
          </div>
        </div>
        <div class="timelineDescription text-dark">
          <p class="timelineDescriptionDate">December 8th - 12:22:19</p>
          <p>{{ SubmittedText }}</p>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="row">
        <div class="timelineStatus">
          <i class="timelineStatusIcon iconEllipsis border-medium text-medium"></i>
          <span class="timelineStatusText text-medium">In Progress</span>
          <div class="timelinePath border-medium">
          </div>
        </div>
        <div class="timelineDescription text-medium">
          <p class="timelineDescriptionDate">-</p>
          <p>{{ InProgressText }}</p>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="row">
        <div class="timelineStatus">
          <i class="timelineStatusIcon iconConfirm border-medium text-medium"></i>
          <span class="timelineStatusText text-medium">Completed</span>
        </div>
        <div class="timelineDescription text-medium">
          <p class="timelineDescriptionDate">-</p>
          <p>{{ CompletedText }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        SubmittedText: 'The application has been successfully completed, but has not been assigned to an agent.',
        InProgressText: 'An agent has been assigned, but there is no result available as of yet.',
        ErrorsText: 'There has been an error with the application. Please contact us at help@tritoncanada.ca with questions.',
        CompletedText: 'The check has been completed. A copy of the results can be found somewhere probably.'
      }
    }

}
</script>
```

</docs>
