<style lang="scss" src="./dashboard.scss"></style>
<script lang="ts" src="./dashboard.ts"></script>
<template>
    <div class="dashboard-view">
        <div class="dashboard-container">
            <br><br>
            <h1 class="header1">My Dashboard</h1>
            <!-- <button id="link"><a id="link" href="#/jointAccount"><b>Create a joint Account</b></a></button> -->

            <div class="accounts">
            <h1 id="heading2">Your account</h1>
            <div class="useracc">
                <p id="list" v-for="account in account" :key="account">Account Number: <span>{{account.accountno}}</span> <br> Account Balance: <span>${{account.accountbalance}}</span> </p>
            </div>
            </div>
            
            <div class="balance">
                <h1 id="heading1">Transaction History</h1>
                <ul>
                    <p id="list" v-for="transaction in transactions.transactions" :key="transaction">{{transaction.type}} - ${{transaction.amount}}  <span class="transactionspan">{{transaction.timestamp}}</span></p>
                </ul>
            </div>

                
    <div class="jointAccount-view">
        <h1>Create a Joint Account</h1>
        <form @submit="submitForm" class="jointAccount">
        <div class="jointAccount_container">
            <label for="email"><b>E-mail</b></label>
            <input type="email" placeholder="Enter your e-mail address" v-model="email" required>

            <label for="phonenumber"><b>Phone Number</b></label>
            <input type="number" placeholder="Enter your phone number" v-model="phonenumber" required>

            <label for="trn"><b>TRN</b></label>
            <input type="number" placeholder="Enter your TRN number" v-model="trn" required>
            
            <label for="username"><b>Name</b></label>
            <input type="text" placeholder="Enter your full name" v-model="username" required>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter your account password" v-model="password" required>

            <label for="psw"><b>Re-Enter Password</b></label>
            <input type="password" placeholder="Enter your account password again" v-model="password" required>

            <button type="submit">Create Account</button>
        </div>
        </form>
    </div>

            
            </div>
        
            </div>
</template>
