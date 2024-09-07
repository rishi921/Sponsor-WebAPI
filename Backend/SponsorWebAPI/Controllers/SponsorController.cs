using Microsoft.AspNetCore.Mvc;
using SponsorWebAPI.DAO;
using SponsorWebAPI.Models;

namespace SponsorWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorController : ControllerBase
    {
        private readonly ISponsorDao _sponsorDao;
        public SponsorController(ISponsorDao sponsorDao)
        {
            _sponsorDao = sponsorDao;
        }

        [HttpGet("Match-Details")]
        public async Task<IActionResult> GetMatchDetails()
        {
            var matchDetails = await _sponsorDao.GetMatchDetailsAsync();
            return Ok(matchDetails);
        }

        [HttpGet("Sponsors-Matches")]
        public async Task<ActionResult<IEnumerable<SponsorMatches>>> GetSponsorsMatches([FromQuery] int year)
        {
            var result = await _sponsorDao.GetSponsorsMatchesAsync(year);
            return Ok(result);
        }

        [HttpGet("Sponsor-Details")]
        public async Task<IActionResult> GetSponsorDetails()
        {
            var sponsorDetails = await _sponsorDao.GetSponsorDetailsAsync();
            return Ok(sponsorDetails);
        }

        [HttpPost("Add-Payments")]
        public async Task<IActionResult> AddPayment(Payments payment)
        {
            if (payment == null || payment.PaymentDate == null || payment.AmountPaid == 0)
            {
                return BadRequest("Invalid payment data.");
            }
            bool isAdded = await _sponsorDao.AddPayment(payment);
            if (isAdded)
            {
                return Ok("Payment added successfully.");
            }
            else
            {
                return StatusCode(500, "An error occurred while adding the payment.");
            }
        }
    }
}