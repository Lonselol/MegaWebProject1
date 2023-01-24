import Repository from "./Repository";
import AuthInfo from "../objects/AuthInfo";
import ProfileInfo from "../objects/ProfileInfo";

class ProfileRepository extends Repository<AuthInfo, ProfileInfo> {
    constructor() {
        super("profile");
    }

    async getInfo() {
        let result = await super.get("getInfo");
        return result;
    }
}

const profileRepository = new ProfileRepository();
export default profileRepository;