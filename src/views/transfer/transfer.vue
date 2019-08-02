<template>
<div class="transfer-view">
    <h1> Please enter the relevant information to complete the deposit.</h1>
    <form class="transfer">
        <div class="container">
            <label for="accno"><b>Account Number</b></label>
            <input type="number" placeholder="Enter the reciever's account number" name="accno" required>

            <label for="amount"><b>Amount</b></label>
            <input type="number" placeholder="Enter the amount" name="amount" required>
                
            <button type="submit">Send</button>
        </div>
    </form>
</div>
    
</template>
