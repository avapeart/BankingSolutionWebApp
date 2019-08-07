<style lang="scss" src="./dashboard.scss"></style>
<script lang="ts" src="./dashboard.ts"></script>
<template>
    <div class="dashboard-view">
        <h1 class="header1">My Dashboard</h1>
        <div class="dashboard-container">
            
         <div class="balance">
            <h1 id="heading1">Transaction History</h1>
            <ul>
                <h1 id="list" v-for="transaction in transactions.transactions" :key="transaction">{{transaction.type}} | ${{transaction.amount}}</h1>
            </ul>

            <!-- display balance -->
            </div>
         <div class="accounts">
            <h1 id="heading2">Your account</h1>
            <div class="useracc">
                <h1 id="list" v-for="account in account" :key="account">Account Number: {{account.accountno}} <br> Account Balance: ${{account.accountbalance}} </h1>
            </div>
            </div>
            </div>

    </div>
</template>
