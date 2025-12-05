use anchor_lang::prelude::*;
use anchor_lang::system_program;

#[derive(Accounts)]
pub struct TransferFunds<'info> {
    #[account(mut)]
    pub sender: Signer<'info>,

    #[account(mut)]
    /// CHECK: We are just transferring SOL to this account
    pub recipient: AccountInfo<'info>,

    pub system_program: Program<'info, System>,
}

pub fn transfer_funds(ctx: Context<TransferFunds>, amount: u64) -> Result<()> {
    let sender = &ctx.accounts.sender;
    let recipient = &ctx.accounts.recipient;
    let system_program_account = &ctx.accounts.system_program;

    let cpi_accounts = system_program::Transfer {
        from: sender.to_account_info(),
        to: recipient.to_account_info(),
    };

    let cpi_program = system_program_account.to_account_info();
    let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

    system_program::transfer(cpi_ctx, amount)?;

    msg!("Transferred {} lamports from {} to {}", amount, sender.key(), recipient.key());
    Ok(())
}
