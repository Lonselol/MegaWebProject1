using MegaWebProject.Enums;

namespace MegaWebProject.Objects
{
    /// <summary>
    /// ���������� � ������������
    /// </summary>
    public class AuthInfo
    {
        /// <summary>
        /// ���������������� �� ������������
        /// </summary>
        public bool IsAuthenticated { get; private set; }

        /// <summary>
        /// ���� ������������
        /// </summary>
        public RoleType Role { get; private set; }

        /// <summary>
        /// �������� ��������������
        /// </summary>
        public static AuthInfo Success(RoleType role)
        {
            return new AuthInfo()
            {
                IsAuthenticated = true,
                Role = role
            };
        }

        /// <summary>
        /// ������ ��������������
        /// </summary>
        /// <returns></returns>
        public static AuthInfo Fail()
        {
            return new AuthInfo()
            {
                IsAuthenticated = false,
                Role = RoleType.Undefined
            };
        }
    }
}