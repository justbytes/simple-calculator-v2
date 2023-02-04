import { ethers } from "ethers";
// Imports css
import "../style/Navbar.css";

const Navbar = ({ account, setAccount }) => {
  const connectWallet = async () => {
    // Connects wallet
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };
  return (
    <nav>
      <div>
        <h1>Simple Calculator</h1>
      </div>
      {/* Conditional that shows connect wallet if wallet is not connected */}

      {account ? (
        <button type="button" className="connect-wallet-btn">
          {account.slice(0, 6) + "..." + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className="connect-wallet-btn"
          onClick={connectWallet}
        >
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navbar;
