using SponsorWebAPI.Models;

namespace SponsorWebAPI.DAO
{
    public interface ISponsorDao
    {
        public Task<bool> IsPaymentDataValid(Payments payment);
        public Task<IEnumerable<MatchDetails>> GetMatchDetailsAsync();
        public Task<IEnumerable<SponsorDetails>> GetSponsorDetailsAsync();
        public Task<IEnumerable<SponsorMatches>> GetSponsorsMatchesAsync(int year);
        public Task<bool> AddPayment(Payments payment);
    }
}
