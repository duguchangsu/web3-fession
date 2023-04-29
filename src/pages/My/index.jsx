import { useMetaMask } from "../../hooks/useMetaMask"
import AccountCard from "../../features/AccountCard";

function My() {
    const { account } = useMetaMask()

    return (
        <div>
            <AccountCard account={account}></AccountCard>
        </div>
    )
}

export default My