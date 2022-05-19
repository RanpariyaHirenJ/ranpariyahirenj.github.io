// Smart Contract Details
const PresaleAddress = "0x4D182008a3F449715FDFeC56C217E08a3b252d5C";
const PresaleABI = [{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BnbDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"fromAddress","type":"address"},{"indexed":false,"internalType":"address","name":"contractAddress","type":"address"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"amountTransfered","type":"event"},{"inputs":[],"name":"ExchangeBNBforTokenMannual","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"}],"name":"blacklistAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bnbBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bnbDecimal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimIn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositCrypto","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"},{"internalType":"uint256[]","name":"_amount","type":"uint256[]"}],"name":"dropTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minContribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDecimal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenExchanged","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPriceBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalHardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTransaction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"address payable[]","name":"receivers","type":"address[]"}],"name":"transferCrypto","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"turnWhitelist","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newHardcapValue","type":"uint256"}],"name":"updateHardCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newTokenAddr","type":"address"}],"name":"updateTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"updateTokenContribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDecimal","type":"uint256"}],"name":"updateTokenDecimal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTokenValue","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_recipients","type":"address[]"}],"name":"whitelistAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"beneficiary","type":"address"}],"name":"withdrawCrypto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
var app = new Vue({
    el: "#app",
    data() {
        return {
            price: 0.00015625,
            bnbAmount: "",
            web3Modal: null,
            web3Object: '',
            loading: false,
            metamaskAccount: '',
            claimAble: false,
            tokenAmount: '',
            tokenExchanged: 0,
            collected: 0,
            balance: 0,
            width: '0',
            rangewidth: '0',
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    },
    beforeMount() {
        const Web3Modal = window.Web3Modal.default;
        const WalletConnectProvider = window.WalletConnectProvider.default;
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    rpc: {
                        56: "https://bsc-dataseed.binance.org/",
                    },
                    chainId: 56,
                    infuraId: "d85fda7b424b4212ba72f828f48fbbe1",
                    pollingInterval: "10000",
                },
            },
        };

        this.web3Modal = new Web3Modal({
            providerOptions,
            cacheProvider: false,
            disableInjectedProvider: false,
        });
    },
    async mounted() {
        var countDownDate = new Date("April 19, 2022 23:59:00").getTime();
        var x = setInterval(() => {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            if (distance > 0) {
                this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            }
        }, 1000);

        const web3 = new Web3("https://bsc-dataseed.binance.org/");
        let collected = await web3.eth.getBalance(PresaleAddress)
        console.log("collected", collected);
        this.collected = parseFloat(collected / 1e18).toFixed(2);
        // this.width = (Number(this.collected) / 30000) * 100
        this.width = (Number(this.collected) / 10000) * 100
        this.rangewidth = (Number(this.width)).toFixed(2);
    },
    methods: {
        addrTruncation(addr) {
            return addr.slice(0, 6) + "…" + addr.slice(addr.length - 4, addr.length);
        },
        onDisconnect() {
            localStorage.clear();
            this.web3Object = null,
                this.metamaskAccount = null
        },

        async onConnect() {
            try {
                let provider = await this.web3Modal.connect();
                this.onProvider(provider);
                // Subscribe to accounts change
                provider.on("accountsChanged", (accounts) => {
                    console.log(accounts);
                    this.onProvider(provider);
                });
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
        },

        async onProvider(provider) {
            this.web3Object = new Web3(provider);

            this.chainId = await this.web3Object.eth.getChainId();
            if (this.chainId !== 56) {
                this.notify("Please Connect You Wallet to Binance Smart Chain");
                return;
            }

            let accounts = await this.web3Object.eth.getAccounts();
            this.metamaskAccount = accounts[0]

            let balance = await this.web3Object.eth.getBalance(this.metamaskAccount)
            console.log("balance", balance);
            this.balance = parseFloat(balance / 1e18);

            this.readValues();
        },

        readValues() {
            let instance = new this.web3Object.eth.Contract(
                PresaleABI,
                PresaleAddress
            );
            try {
                Promise.all([
                    instance.methods.claim().call(),
                    instance.methods
                        .tokenExchanged(this.metamaskAccount)
                        .call(),
                ]).then(
                    ([
                        claimAble,
                        tokenExchanged,
                    ]) => {
                        console.log("claimAble", claimAble);
                        console.log("tokenExchanged", tokenExchanged);
                        this.claimAble = claimAble;
                        this.tokenExchanged = parseFloat(tokenExchanged / 1e18);
                    }
                );
            } catch (error) {
                console.log(error);
            }
        },

        async onDeposit() {
            if (!this.metamaskAccount) {
                this.notify("Please Connect Wallet");
                return;
            } else if (!this.bnbAmount) {
                this.notify("Enter BNB amount you want to send!");
                return;
            } else if (Number(this.bnbAmount) < 1 || Number(this.bnbAmount) > 8) {
                this.notify("Minimum contribution is 1 BNB and Maximum is 8 BNB");
                return;
            } else if (Number(this.bnbAmount) > Number(this.balance)) {
                this.notify("insufficient fund");
                return;
            }

            this.loading = true;

            let instance = new this.web3Object.eth.Contract(
                PresaleABI,
                PresaleAddress
            );

            let value = this.web3Object.utils.toHex(
                this.web3Object.utils.toWei(this.bnbAmount.toString(), "ether")
            );

            instance.methods
                .ExchangeBNBforTokenMannual()
                .send({
                    from: this.metamaskAccount,
                    to: PresaleAddress,
                    value: value,
                })
                .on("transactionHash", (hash) => {
                    console.log("Transaction hash", hash);
                    this.notify("Transaction is submitted to network!");
                })
                .on("receipt", (receipt) => {
                    this.loading = false;
                    this.notify("Transaction completed successfully");
                    console.log("Receipt: ", receipt);
                })
                .on("error", (error) => {
                    this.loading = false;
                    console.log("Error receipt: ", error);
                });
        },

        onClaimToken() {
            if (!this.claimAble) {
                this.notify("You cannot claim now, come again later");
                return false;
            }

            if (!this.tokenExchanged) {
                this.notify("You don't have anything to claim");
                return false;
            }

            let instance = new this.web3Object.eth.Contract(
                PresaleABI,
                PresaleAddress
            );

            instance.methods
                .claimToken()
                .send({
                    from: this.metamaskAccount,
                    value: 0,
                })
                .on("transactionHash", (hash) => {
                    console.log("Transaction hash", hash);
                    this.notify("Transaction is submitted to network!");
                })
                .on("receipt", (receipt) => {
                    this.notify("Token Claimed Sucessfully !");
                    console.log("Receipt: ", receipt);
                })
                .on("error", (error) => {
                    this.notify("Transaction reejcted");
                    console.log("Error receipt: ", error);
                });
        },
        notify(msg) {
            Toastify({
                text: msg,
                duration: 3000,
                gravity: "bottom",
                position: "right",
            }).showToast();
        }
    },
    watch: {
        bnbAmount() {
            this.tokenAmount = Number(this.bnbAmount) / Number(this.price);
        },
    },
});