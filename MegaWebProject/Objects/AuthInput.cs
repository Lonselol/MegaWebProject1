namespace MegaWebProject.Objects
{
    /// <summary>
    /// ������ ��� ��������������
    /// </summary>
    public class AuthInput
    {
        /// <summary>
        /// �����
        /// </summary>
        public string login { get; set; } = string.Empty;

        /// <summary>
        /// ������
        /// </summary>
        public string password { get; set; } = string.Empty;
    }
}