import { useMetaMask } from "../../hooks/useMetaMask"
import AccountCard from "../../features/AccountCard";

function My() {
    const { account } = useMetaMask()
    console.log(account);
    return (
        <div>
            <AccountCard account={account}></AccountCard>
        </div>
    )
}

export default My