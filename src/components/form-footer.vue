<template>
  <div class="formFooter">
    <!-- This section gets pushed to the left side-->
    <div class="formFooter__section">
      <div class="formFooter__item formFooterFeedback">
        <div class="fa fa-spinner formFooterSpinner"></div>&nbsp;Saving...
      </div>
    </div>
    <!-- This section gets pushed to the right side-->
    <div class="formFooter__section">
      <div class="formFooter__item button button--clear">Reset</div>
      <div class="formFooter__item button">Save</div>
    </div>
  </div>
</template>

<style>
  .formFooter {
    /**
     * Lay out the children of this container with
     * flexbox, which is horizontal by default.
     */
    display: flex;

    /**
     * Make the container put as much space as possible
     * between its children, with the children at either
     * end laying flush against the container's edges.
     */
    justify-content: space-between;

    /**
     * Align the children in the center, along
     * the main axis, which is horizontal in this case.
     */
    align-items: center;

    border-top: 1px solid #D7DBDD;
    padding: 10px;
  }

    .formFooter__section {
      /**
       * This container orders items horizontally.
       */
      display: flex;

      /**
       * It aligns them vertically in the center.
       */
      align-items: center;
    }

      .formFooter__item + .formFooter__item {
        margin-left: 5px;
      }

      .formFooterFeedback {
        color: #86969C;
        font-size: 12px;
        line-height: 0;
      }

      .formFooterSpinner {
        animation: formFooterSpinner 1s infinite steps(8, end);
      }

  @keyframes formFooterSpinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .button--clear {
    color: #16A2D7;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }
</style>
