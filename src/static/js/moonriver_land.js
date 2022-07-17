
$(function() {
consoleInit(main)
  });

const LAND_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_land","internalType":"contract LandSwap"},{"type":"address","name":"_sland","internalType":"contract SpritLand"},{"type":"address","name":"_devaddr","internalType":"address"},{"type":"address","name":"_feeAddress","internalType":"address"},{"type":"uint256","name":"_landPerBlock","internalType":"uint256"}]},{"type":"event","name":"AddPool","inputs":[{"type":"address","name":"strat","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC721"}],"name":"EarthNFT","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC721"}],"name":"FireNFT","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"MAXIMUM_NFT_BURN_RATE","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC721"}],"name":"WaterNFT","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC721"}],"name":"WindNFT","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"address","name":"_strat","internalType":"address"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"burnNFTRate","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devAddress","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enterStaking","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeAddress","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract LandSwap"}],"name":"land","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"landNFTEnable","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"landPerBlock","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"leaveStaking","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IMigratorChef"}],"name":"migrator","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingLand","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"poolExistence","inputs":[{"type":"address","name":"","internalType":"contract IERC20"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"address","name":"strat","internalType":"address"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accLandPerShare","internalType":"uint256"},{"type":"uint16","name":"depositFeeBP","internalType":"uint16"},{"type":"uint256","name":"lpBalance","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"resetAllowances","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"resetSingleAllowance","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"uint16","name":"_depositFeeBP","internalType":"uint16"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setDevAddress","inputs":[{"type":"address","name":"_devaddr","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeAddress","inputs":[{"type":"address","name":"_feeAddress","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setLandNFT","inputs":[{"type":"address","name":"_earthNFT","internalType":"address"},{"type":"address","name":"_windNFT","internalType":"address"},{"type":"address","name":"_waterNFT","internalType":"address"},{"type":"address","name":"_fireNFT","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setLandNFTEnable","inputs":[{"type":"bool","name":"_enabled","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setLandNFTRate","inputs":[{"type":"uint256","name":"_burnNFTRate","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract SpritLand"}],"name":"sland","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startBlock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_landPerBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMultiplier","inputs":[{"type":"uint256","name":"multiplierNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateStartBlock","inputs":[{"type":"uint256","name":"_startBlock","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

   const LAND_CHEF_ADDR = "0x2B83137e6662541A77E7c94244113A88d9602631";
   const rewardTokenTicker = "LAND";
   const LAND_CHEF = new ethers.Contract(LAND_CHEF_ADDR, LAND_CHEF_ABI, App.provider);
    
   const blocksPerSeconds = await getAverageBlockTime(App);
   const startBlock = await LAND_CHEF.startBlock();
    const currentBlock = await App.provider.getBlockNumber();
    
   
         let rewardsPerWeek = 0
       if(currentBlock < startBlock){
         _print(`REWARDS HAVE NOT YET STARTED!\n\tRewards start at block ${startBlock}\n`);
       }else{
        rewardsPerWeek = await LAND_CHEF.landPerBlock() / 1e18 *		
                604800 / blocksPerSeconds;
       }

    const tokens = {};
    const prices = await getMoonriverPrices();

    await loadGeneralChefContract(App, tokens, prices, LAND_CHEF, LAND_CHEF_ADDR, LAND_CHEF_ABI, rewardTokenTicker,
        "land", null, rewardsPerWeek, "pendingLand", [1], "moonriver");

    hideLoading();
  }