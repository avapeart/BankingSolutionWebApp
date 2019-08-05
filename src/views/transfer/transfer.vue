<template>
<div class="transfer-view">
    <h1> Please enter the relevant information to complete the deposit.</h1>
    <form class="transfer">
        <div class="container">
            <label for="senderno"><b>Sender's Account Number</b></label>
            <input type="number" placeholder="Enter the sender's account number" v-model="senderno" required>

            <label for="receiverno"><b>Receiver's Account Number</b></label>
            <input type="number" placeholder="Enter the reciever's account number" v-model="receiverno" required>

            <label for="amount"><b>Amount</b></label>
            <input type="number" placeholder="Enter the amount" v-model="amount" required>
                
            <button type="submit">Send</button>
        </div>
    </form>
</div>
    
</template>
