<script setup lang="ts">
import { UploadFile } from '@renderer/features/';
</script>


<template>
    <div class="footer-container">
        <div class="footer-uncontainer">
            <UploadFile />
        </div>
    </div>
</template>

<style>
.footer-container {
    flex: 0 0 auto;
    height: 100%;
    min-width: 200px;
    min-height: 70px;
}

.footer-uncontainer {

    margin: 10px;
    margin-top: 0;
    background-color: #292929;

    border-radius: 10px;
    border-bottom: 2px solid #7bffcc;
    border-top: 2px solid #7bffcc;
}
</style>