import RoleType from "../enums/Roles"

type AuthInfo = {
    isAuthenticated: boolean;
    role: RoleType;
}

export default AuthInfo;