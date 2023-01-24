namespace MegaWebProject.Enums
{
    public enum RoleType
    {
        /// <summary>
        /// ����������
        /// </summary>
        Undefined = 0,
        /// <summary>
        /// �������������
        /// </summary>
        Admin = 1,
        /// <summary>
        /// ������������
        /// </summary>
        User = 2
    }

    public static class Role
    {
        public static RoleType FromString(string str)
        {
            foreach (RoleType role in Enum.GetValues(typeof(RoleType)))
            {
                if (role.ToString() == str)
                    return role;
            }

            return RoleType.Undefined;
        }
    }
}