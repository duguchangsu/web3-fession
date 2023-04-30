import { useMetaMask } from "../../hooks/useMetaMask"
import AccountCard from "../../features/AccountCard";
import Deflation from "../../features/deflation";
import AddressBalance from "../../features/AddressBalance";

function My() {
    const { account } = useMetaMask()

    return (
        <div>
            <AddressBalance />
            <AccountCard account={account} />
            <Deflation />

        </div>
    )
}

export default My