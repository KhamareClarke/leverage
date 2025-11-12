// THE LEVERAGE JOURNAL™ - MASTER EDITION GENERATOR
// Complete restructured version with proper chapters and organization

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateMasterJournal();
});

function generateMasterJournal() {
    // Create a temporary container to hold all pages
    const tempContainer = document.createElement('div');
    
    // Generate all sections in order
    tempContainer.innerHTML = 
        generateChapter1Vision() +
        generateChapter1VisionComplete() +
        generateChapter2Plan() +
        generateChapter3Do() +
        generateChapter4Review() +
        generateChapter5Legacy() +
        generateBackMatter() +
        generateBackCover();
    
    // Get the main container
    const mainContainer = document.getElementById('journal-content');
    if (!mainContainer) {
        console.error('Could not find journal-content element');
        return;
    }
    
    // Clear existing content and append new content
    mainContainer.innerHTML = '';
    while (tempContainer.firstChild) {
        mainContainer.appendChild(tempContainer.firstChild);
    }
    
    // Initialize interactive elements
    initializeInteractiveElements();
    
    console.log('Journal content generated successfully');
}

// FRONT MATTER GENERATION - REMOVED TO ELIMINATE DUPLICATES
// The HTML file already contains pages 001-004, so this function is no longer needed

// Continue with other functions...
function generateChapter1Vision() {
    return `
    <!-- CHAPTER 1 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="chapter-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="var(--gold)" stroke-width="2"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5C16.478 5 20.268 7.943 21.542 12C20.268 16.057 16.478 19 12 19C7.523 19 3.732 16.057 2.458 12Z" stroke="var(--gold)" stroke-width="2"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 1
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            VISION
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Every empire begins with a vision.<br>
            Every vision begins with clarity.<br>
            <span class="gold-gradient font-semibold">Every clarity begins with focus.</span>
        </p>
        
        <div class="qr-enhanced">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="var(--black)">
                <rect width="80" height="80" fill="var(--black)" rx="4"/>
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="var(--gold)" stroke-width="2"/>
                <text x="40" y="45" text-anchor="middle" fill="var(--gold)" font-size="8">QR_02</text>
            </svg>
            <div class="qr-caption">Access Vision Board<br><code>leverage.app/vision</code></div>
        </div>
        
        <div class="page-number">007</div>
    </div>`;
}

// Continue Chapter 1 - VISION
function generateChapter1VisionComplete() {
    return `
    <!-- PAGE 008: THE LAW OF LEVERAGE -->
    <div class="page">
        <div class="philosophy-section">
            <h1 class="philosophy-title">The Law of Leverage</h1>
            
            <div class="philosophy-essay">
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Small, consistent actions compound into legacy. This is the Law of Leverage—extraordinary results come from ordinary moments executed well.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Every empire was built one decision at a time. Every fortune was accumulated one dollar at a time. The magic is in consistency, not magnitude.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">When you write in this journal each day, you are programming your subconscious for success. You are becoming the person who achieves.</p>
                
                <div class="law-principle" style="background: var(--black-card); padding: 0.75rem; border-left: 4px solid var(--gold); margin: 1rem 0;">
                    <h4 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">The Compound Effect Formula</h4>
                    <p style="color: var(--gray-light); font-size: 0.8rem;">Small Smart Choices + Consistency + Time = Radical Difference</p>
                </div>
                
                <div class="reflection-prompt" style="font-size: 0.8rem; padding: 0.5rem; margin-bottom: 0.5rem;">
                    <strong>Reflection:</strong> What daily habit would most transform your life in 90 days?
                </div>
            </div>
        </div>
        
        <div class="page-number">008</div>
        <div class="footer-wisdom">"Throughout history, it has been the inaction of those who could have acted that has made it possible for evil to triumph." — Haile Selassie</div>
    </div>
    
    <!-- PAGE 009: FREEDOM THROUGH FOCUS -->
    <div class="page">
        <div class="philosophy-section">
            <h1 class="philosophy-title">Freedom Through Focus</h1>
            
            <div class="philosophy-essay">
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Freedom is not the absence of constraints—it is the intelligent application of constraints. Steve Jobs limited Apple to three priorities. This constraint created freedom to achieve perfection.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">In a world of infinite distractions, focus becomes your competitive advantage. While others scatter energy, you concentrate on the few that matter most.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Each day in this journal, you will identify your three most important tasks. Not ten. Not five. Three. This constraint frees you from the urgent and elevates you to the important.</p>
                
                <div class="focus-framework" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin: 1rem 0;">
                    <div class="focus-item" style="text-align: center; padding: 0.75rem; background: var(--black-card); border-radius: 8px;">
                        <div style="color: var(--gold); font-size: 1.5rem; margin-bottom: 0.3rem;">🎯</div>
                        <h4 style="color: var(--gold-light); font-size: 0.85rem;">Priority 1</h4>
                        <p style="color: var(--gray); font-size: 0.75rem;">Most Important</p>
                    </div>
                    <div class="focus-item" style="text-align: center; padding: 0.75rem; background: var(--black-card); border-radius: 8px;">
                        <div style="color: var(--gold); font-size: 1.5rem; margin-bottom: 0.3rem;">⚡</div>
                        <h4 style="color: var(--gold-light); font-size: 0.85rem;">Priority 2</h4>
                        <p style="color: var(--gray); font-size: 0.75rem;">High Impact</p>
                    </div>
                    <div class="focus-item" style="text-align: center; padding: 0.75rem; background: var(--black-card); border-radius: 8px;">
                        <div style="color: var(--gold); font-size: 1.5rem; margin-bottom: 0.3rem;">🚀</div>
                        <h4 style="color: var(--gold-light); font-size: 0.85rem;">Priority 3</h4>
                        <p style="color: var(--gray); font-size: 0.75rem;">Strategic Move</p>
                    </div>
                </div>
                
                <div class="reflection-prompt" style="font-size: 0.8rem; padding: 0.5rem; margin-bottom: 0.5rem;">
                    <strong>Reflection:</strong> What would you accomplish with laser focus for 90 days?
                </div>
            </div>
        </div>
        
        <div class="page-number">009</div>
        <div class="footer-wisdom">"The time for action is now. It's never too late to do something." — Antoine de Saint-Exupéry</div>
    </div>
    
    <!-- PAGE 010: GOAL TIMELINE FRAMEWORK -->
    <div class="page" style="padding-top: 0.2rem;">
        <h1 class="text-center gold-gradient mb-3" style="font-size: 1.4rem; margin-bottom: 0.2rem;">GOAL TIMELINE FRAMEWORK</h1>
        <div class="gold-line" style="margin-bottom: 0.2rem;"></div>
        
        <div class="timeline-intro" style="margin-bottom: 0.2rem;">
            <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.2; text-align: center; margin: 0;">
                Success is a journey with waypoints. Map your path.
            </p>
        </div>
        
        <div class="goal-timeline" style="display: grid; gap: 0.3rem;">
            <!-- 10+ Year Legacy Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.4rem; border-radius: 6px; border-left: 4px solid var(--gold);">
                <h3 style="color: var(--gold); margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🏛️</span>
                    LEGACY (10+ Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">What legacy will you leave?</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                </div>
            </div>
            
            <!-- 5-10 Year Vision Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.4rem; border-radius: 6px; border-left: 4px solid var(--gold-light);">
                <h3 style="color: var(--gold-light); margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🌟</span>
                    VISION (5-10 Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Your ideal life. What does success look like?</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                </div>
            </div>
            
            <!-- 2-5 Year Strategic Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.4rem; border-radius: 6px; border-left: 4px solid #FFD700;">
                <h3 style="color: #FFD700; margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🎯</span>
                    STRATEGIC (2-5 Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Major milestones for your vision.</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">010</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"I have learned throughout my life as a composer chiefly through my mistakes and pursuits of false assumptions." — Igor Stravinsky</div>
    </div>
    
    <!-- PAGE 011: TACTICAL GOALS & QUARTERLY PLANNING -->
    <div class="page" style="padding-top: 0.2rem;">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.4rem; margin-bottom: 0.2rem;">TACTICAL EXECUTION</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div class="tactical-goals" style="display: grid; gap: 0.4rem; margin-top: 0.3rem;">
            <!-- 3-6 Month Tactical Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.4rem; border-radius: 6px; border-left: 4px solid #FFA500;">
                <h3 style="color: #FFA500; margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">⚡</span>
                    TACTICAL (3-6 Months)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Bridge goals for strategic objectives.</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <!-- Current Quarter Focus -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.4rem; border-radius: 6px; border-left: 4px solid #32CD32;">
                <h3 style="color: #32CD32; margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🚀</span>
                    THIS QUARTER (90 Days)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Your immediate focus for next 90 days.</p>
                <div class="goal-categories" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem; margin-top: 0.2rem;">
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💼 CAREER</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💪 HEALTH</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💰 FINANCIAL</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">❤️ RELATIONSHIPS</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">🎓 LEARNING</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">🌟 GROWTH</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="page-number">011</div>
        <div class="footer-wisdom">"Impossible is a word found only in the dictionary of fools." — Napoleon Bonaparte</div>
    </div>
    
    <!-- PAGE 012: MY COMMITMENT -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">MY COMMITMENT</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div class="commitment-section">
            <p class="mb-3" style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4;">
                I understand that transformation requires commitment. I commit to using this journal daily for 90 days, knowing consistency creates compound results.
            </p>
            
            <div class="commitment-pledge" style="background: var(--black-card); padding: 1rem; border-radius: 8px; border: 2px solid var(--gold); margin: 1rem 0;">
                <h3 style="color: var(--gold); text-align: center; margin-bottom: 0.75rem; font-size: 0.95rem;">My Commitment</h3>
                
                <div class="pledge-text" style="color: var(--gray-light); line-height: 1.5; font-size: 0.8rem;">
                    <p style="margin-bottom: 0.5rem;">I, _________________________, commit to:</p>
                    <p style="margin-bottom: 0.3rem;">✓ Completing daily pages every morning</p>
                    <p style="margin-bottom: 0.3rem;">✓ Reflecting on progress every evening</p>
                    <p style="margin-bottom: 0.3rem;">✓ Reviewing goals weekly</p>
                    <p style="margin-bottom: 0.3rem;">✓ Celebrating victories monthly</p>
                    <p style="margin-bottom: 0.5rem;">✓ Never breaking the chain for 90 days</p>
                    <p style="margin-bottom: 0.5rem;">I understand this commitment is to myself and my future.</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
                        <div>
                            <p style="font-size: 0.75rem;">Signature: _________________</p>
                        </div>
                        <div>
                            <p style="font-size: 0.75rem;">Date: _________________</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="accountability-partner" style="margin-top: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.85rem;">Accountability Partner(s)</h4>
                <p style="color: var(--gray-light); margin-bottom: 0.5rem; font-size: 0.75rem;">Share with someone who will hold you accountable:</p>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <p style="color: var(--gray); font-size: 0.7rem; margin-top: 0.2rem;">Name & Contact</p>
            </div>
        </div>
        
        <div class="page-number">012</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"We declare our right on this earth to be a human being, to be respected as a human being." — Malcolm X</div>
    </div>
    
    <!-- PAGE 013: MY VISION -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">MY VISION</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div class="vision-questions">
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">🏰 My Empire Vision</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    Describe the empire you're building. What does your life look like in 5 years?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">💰 Financial Freedom Number</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    What annual income would give you complete financial freedom?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">🌍 Legacy Impact</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    How do you want to be remembered? What impact will you leave?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">013</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"The thing to do is to supply light and not heat." — Woodrow Wilson</div>
    </div>
    
    <!-- PAGE 014: MY WHY -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">MY WHY</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div class="why-questions">
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">🔥 What Drives Me</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    What is your deepest motivation? What gets you up in the morning?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">😤 What I'm Done With</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    What are you absolutely done tolerating in your life?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">❤️ Who/What I'm Building For</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    Who are you building this empire for? Who depends on your success?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">014</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"If you have no confidence in self, you are twice defeated in the race of life." — Marcus Garvey</div>
    </div>
    
    <!-- PAGE 015: MY INFLUENCES -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">MY INFLUENCES</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div class="influences-section">
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">📚 Books That Shaped Me</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    List the 5 books that most influenced your thinking:
                </p>
                <div class="book-list">
                    <div style="display: flex; align-items: center; margin-bottom: 0.4rem;">
                        <span style="color: var(--gold); font-size: 0.75rem; margin-right: 0.5rem;">1.</span>
                        <div style="flex: 1; border-bottom: 1px solid var(--gray-dark); height: 18px;"></div>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 0.4rem;">
                        <span style="color: var(--gold); font-size: 0.75rem; margin-right: 0.5rem;">2.</span>
                        <div style="flex: 1; border-bottom: 1px solid var(--gray-dark); height: 18px;"></div>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 0.4rem;">
                        <span style="color: var(--gold); font-size: 0.75rem; margin-right: 0.5rem;">3.</span>
                        <div style="flex: 1; border-bottom: 1px solid var(--gray-dark); height: 18px;"></div>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 0.4rem;">
                        <span style="color: var(--gold); font-size: 0.75rem; margin-right: 0.5rem;">4.</span>
                        <div style="flex: 1; border-bottom: 1px solid var(--gray-dark); height: 18px;"></div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="color: var(--gold); font-size: 0.75rem; margin-right: 0.5rem;">5.</span>
                        <div style="flex: 1; border-bottom: 1px solid var(--gray-dark); height: 18px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">👥 Mentors & Role Models</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    Who do you study and learn from? (Living or historical)
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <div class="question-section">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">💡 Core Principles</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    What are your 3 most important life principles?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">015</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"The Almighty has no attribute which can take sides with oppressors." — Frederick Douglass</div>
    </div>`;
}

// CHAPTER 2 - PLAN
function generateChapter2Plan() {
    return `
    <!-- CHAPTER 2 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="chapter-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="var(--gold)" stroke-width="2"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 2
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            PLAN
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Strategy is the foundation of victory.<br>
            Define your targets. Map your route.<br>
            <span class="gold-gradient font-semibold">Execute with precision.</span>
        </p>
        
        <div class="qr-enhanced">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="var(--black)">
                <rect width="80" height="80" fill="var(--black)" rx="4"/>
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="var(--gold)" stroke-width="2"/>
                <text x="40" y="45" text-anchor="middle" fill="var(--gold)" font-size="8">QR_03</text>
            </svg>
            <div class="qr-caption">Access Plan Dashboard<br><code>leverage.app/plan</code></div>
        </div>
        
        <div class="page-number">016</div>
    </div>
    
    <!-- PAGE 017: THE 12 LAWS OF LEVERAGE -->
    <div class="page">
        <div class="philosophy-section">
            <h1 class="philosophy-title">The 12 Laws of Leverage</h1>
            
            <div class="philosophy-essay">
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">These twelve laws form the foundation of strategic thinking. Master them, and you master achieving maximum results with minimum effort.</p>
                
                <div class="laws-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin: 1rem 0;">
                    <div class="law-item" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                        <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">1. Compound Focus</h4>
                        <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3;">Small, consistent actions compound over time.</p>
                    </div>
                    
                    <div class="law-item" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                        <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">2. Strategic Constraint</h4>
                        <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3;">Limitations create possibilities.</p>
                    </div>
                    
                    <div class="law-item" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                        <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">3. Momentum Multiplication</h4>
                        <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3;">Success accelerates through momentum.</p>
                    </div>
                    
                    <div class="law-item" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                        <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">4. System Supremacy</h4>
                        <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3;">Systems beat goals.</p>
                    </div>
                    
                    <div class="law-item" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                        <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">5. Identity Transformation</h4>
                        <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3;">Change who you are.</p>
                    </div>
                    
                    <div class="law-item" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                        <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">6. Environmental Design</h4>
                        <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3;">Shape environment, shape behavior.</p>
                    </div>
                </div>
                
                <p style="text-align: center; color: var(--gold-light); font-style: italic; font-size: 0.75rem;">The remaining six laws continue...</p>
            </div>
        </div>
        
        <div class="page-number">017</div>
        <div class="footer-wisdom">"The most dangerous person is the one who listens, thinks and observes." — Bruce Lee</div>
    </div>`;
}
// UNIQUE QUOTE SYSTEM FOR DAILY PAGES
function getDailyQuote(day) {
    const quotes = [
        // Historical Figures - African Leaders & Thinkers
        '"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela',
        '"A people without the knowledge of their past history is like a tree without roots." — Marcus Garvey',
        '"We declare our right on this earth to be a human being, to be respected as a human being." — Malcolm X',
        '"If you have no confidence in self, you are twice defeated in the race of life." — Marcus Garvey',
        '"Throughout history, it has been the inaction of those who could have acted that has made it possible for evil to triumph." — Haile Selassie',
        '"The Almighty has no attribute which can take sides with oppressors." — Frederick Douglass',
        '"I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves." — Harriet Tubman',
        '"Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome." — Booker T. Washington',
        '"Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly." — Langston Hughes',
        '"The way to get started is to quit talking and begin doing." — Walt Disney',
        
        // Military & Strategic Leaders
        '"Impossible is a word found only in the dictionary of fools." — Napoleon Bonaparte',
        '"Victory belongs to the most persevering." — Napoleon Bonaparte',
        '"I can accept failure, everyone fails at something. But I can\'t accept not trying." — Michael Jordan',
        '"The most dangerous person is the one who listens, thinks and observes." — Bruce Lee',
        '"Be like water making its way through cracks." — Bruce Lee',
        '"Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat." — Sun Tzu',
        '"In the midst of chaos, there is also opportunity." — Sun Tzu',
        '"Know yourself and you will win all battles." — Sun Tzu',
        '"The supreme excellence is to subdue the enemy without fighting." — Sun Tzu',
        '"Opportunities multiply as they are seized." — Sun Tzu',
        
        // Philosophers & Thinkers
        '"The unexamined life is not worth living." — Socrates',
        '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle',
        '"It is during our darkest moments that we must focus to see the light." — Aristotle',
        '"The only true wisdom is in knowing you know nothing." — Socrates',
        '"He who is not courageous enough to take risks will accomplish nothing in life." — Muhammad Ali',
        '"Float like a butterfly, sting like a bee." — Muhammad Ali',
        '"Service to others is the rent you pay for your room here on earth." — Muhammad Ali',
        '"Don\'t count the days, make the days count." — Muhammad Ali',
        '"Champions aren\'t made in gyms. Champions are made from something deep inside them: a desire, a dream, a vision." — Muhammad Ali',
        '"The man who has no imagination has no wings." — Muhammad Ali',
        
        // Scientists & Innovators
        '"Imagination is more important than knowledge." — Albert Einstein',
        '"Try not to become a person of success, but rather try to become a person of value." — Albert Einstein',
        '"The important thing is not to stop questioning." — Albert Einstein',
        '"Life is like riding a bicycle. To keep your balance, you must keep moving." — Albert Einstein',
        '"In the middle of difficulty lies opportunity." — Albert Einstein',
        '"Great spirits have always encountered violent opposition from mediocre minds." — Albert Einstein',
        '"The only source of knowledge is experience." — Albert Einstein',
        '"Logic will get you from A to B. Imagination will take you everywhere." — Albert Einstein',
        '"A person who never made a mistake never tried anything new." — Albert Einstein',
        '"Weakness of attitude becomes weakness of character." — Albert Einstein',
        
        // Khamare Clarke Original Quotes
        '"Systems create freedom, habits create leverage." — Khamare Clarke',
        '"What gets measured gets mastered." — Khamare Clarke',
        '"Discipline is the bridge between goals and accomplishment." — Khamare Clarke',
        '"Progress, not perfection, builds empires." — Khamare Clarke',
        '"Focus is the art of knowing what to ignore." — Khamare Clarke',
        '"Consistency compounds into greatness." — Khamare Clarke',
        '"Your daily choices become your destiny." — Khamare Clarke',
        '"Excellence is a system, not an accident." — Khamare Clarke',
        '"Leverage is not what you have—it\'s what you do with it." — Khamare Clarke',
        '"The master has failed more than the beginner has tried." — Khamare Clarke',
        '"Reflection turns experience into wisdom." — Khamare Clarke',
        '"Principles are the territory. Practices are the map." — Khamare Clarke',
        '"Success is a system, not an event." — Khamare Clarke',
        '"Do it once properly, and it works for you forever." — Khamare Clarke',
        '"Excellence attracts excellence." — Khamare Clarke',
        '"A goal without a timeline is a wish." — Khamare Clarke',
        '"Strategy without execution is hallucination." — Khamare Clarke',
        '"The future belongs to those who prepare for it today." — Khamare Clarke',
        '"Mastery is the result of deliberate daily practice." — Khamare Clarke',
        '"Your environment shapes your behavior." — Khamare Clarke',
        '"Small smart choices compound into radical differences." — Khamare Clarke',
        '"Vision without action is merely a dream." — Khamare Clarke',
        '"Commitment is the foundation of all accomplishment." — Khamare Clarke',
        '"The quality of your questions determines the quality of your life." — Khamare Clarke',
        '"Transformation requires both courage and consistency." — Khamare Clarke',
        '"Your network determines your net worth." — Khamare Clarke',
        '"Habits are the compound interest of self-improvement." — Khamare Clarke',
        '"Focus on systems, not goals." — Khamare Clarke',
        '"The best time to plant a tree was 20 years ago. The second best time is now." — Khamare Clarke',
        '"Clarity precedes mastery." — Khamare Clarke',
        '"Your identity shapes your actions." — Khamare Clarke',
        '"Momentum is the most powerful force in achievement." — Khamare Clarke',
        '"The path to mastery is paved with deliberate practice." — Khamare Clarke',
        '"Success leaves clues—study them." — Khamare Clarke',
        '"Your morning routine sets the tone for your entire day." — Khamare Clarke',
        '"Constraints create creativity." — Khamare Clarke',
        '"The obstacle is the way." — Khamare Clarke',
        '"Feedback is the breakfast of champions." — Khamare Clarke',
        '"Simplicity is the ultimate sophistication." — Khamare Clarke',
        '"Your thoughts become your reality." — Khamare Clarke',
        
        // Additional Historical Figures
        '"The time for action is now. It\'s never too late to do something." — Antoine de Saint-Exupéry',
        '"I have learned throughout my life as a composer chiefly through my mistakes and pursuits of false assumptions." — Igor Stravinsky',
        '"The thing to do is to supply light and not heat." — Woodrow Wilson',
        '"If you want to go fast, go alone. If you want to go far, go together." — African Proverb',
        '"It takes a village to raise a child." — African Proverb',
        '"When the roots of a tree begin to decay, it spreads death to the branches." — Aeschylus',
        '"The best revenge is massive success." — Frank Sinatra',
        '"Whether you think you can or you think you can\'t, you\'re right." — Henry Ford',
        '"The only impossible journey is the one you never begin." — Tony Robbins',
        '"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill'
    ];
    
    // Ensure we have enough quotes for 90 days
    return quotes[(day - 1) % quotes.length];
}

// UNIQUE QUOTE SYSTEM FOR WEEKLY REVIEWS
function getWeeklyQuote(week) {
    const weeklyQuotes = [
        "The week's end is the beginning of wisdom. — Khamare Clarke",
        "Reflection is the mother of all progress. — Confucius", 
        "A life unexamined is not worth living. — Socrates",
        "Experience is the teacher of all things. — Julius Caesar",
        "Learning never exhausts the mind. — Leonardo da Vinci",
        "The only source of knowledge is experience. — Albert Einstein",
        "Wisdom comes from experience, and experience comes from bad judgment. — Mark Twain",
        "In learning you will teach, and in teaching you will learn. — Phil Collins",
        "The beautiful thing about learning is that no one can take it away from you. — B.B. King",
        "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
        "Tell me and I forget, teach me and I may remember, involve me and I learn. — Benjamin Franklin",
        "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. — Brian Herbert",
        "Success is the sum of small efforts repeated day in and day out. — Robert Collier"
    ];
    
    return weeklyQuotes[(week - 1) % weeklyQuotes.length];
}

// CHAPTER 3 - DO (90 Daily Pages)
function generateChapter3Do() {
    let html = `
    <!-- CHAPTER 3 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="chapter-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" opacity="0.1"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 3
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            DO
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-6" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Excellence is not an act, but a habit.<br>
            Execute with intention.<br>
            <span class="gold-gradient font-semibold">Transform through action.</span>
        </p>
        
        <div class="jobs-philosophy" style="background: var(--black-card); padding: 2rem; border-radius: 10px; border-left: 4px solid #007AFF; margin: 2rem 0; max-width: 600px;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <div style="color: #007AFF; font-size: 2rem; margin-bottom: 0.5rem;">🍎</div>
                <h3 style="color: #007AFF; margin-bottom: 1rem;">The Steve Jobs Method</h3>
            </div>
            
            <blockquote style="color: #007AFF; font-size: 1.2rem; font-style: italic; text-align: center; margin-bottom: 1rem;">
                "Focus is about saying no to the hundred other good ideas."
            </blockquote>
            <cite style="color: var(--gray); text-align: center; display: block; margin-bottom: 1.5rem;">— Steve Jobs</cite>
            
            <div style="background: var(--black-soft); padding: 1.5rem; border-radius: 8px; text-align: center;">
                <p style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: bold;">
                    Your Daily Challenge
                </p>
                <p style="color: var(--gray-light); line-height: 1.6;">
                    Complete 3 priorities in the next 18 hours.<br>
                    Nothing else matters today.<br>
                    <span style="color: var(--gold); font-style: italic;">"Deciding what not to do is as important as deciding what to do."</span>
                </p>
            </div>
        </div>
        
        <div class="qr-enhanced">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="var(--black)">
                <rect width="80" height="80" fill="var(--black)" rx="4"/>
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="var(--gold)" stroke-width="2"/>
                <text x="40" y="45" text-anchor="middle" fill="var(--gold)" font-size="8">QR_04</text>
            </svg>
            <div class="qr-caption">Sync with AI CoPilot<br><code>leverage.app/copilot</code></div>
        </div>
        
        <div class="page-number">018</div>
    </div>`;
    
    // Generate ALL 90 unique daily pages with distinct quotes
    const uniqueQuotes = [
        // Days 1-10: Foundation Building
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", lesson: "Action beats intention every time.", reflection: "What is one action you've been postponing that could change everything?" },
        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", lesson: "Persistence is the ultimate leverage.", reflection: "How can you turn today's challenges into tomorrow's advantages?" },
        { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins", lesson: "Starting is half the victory.", reflection: "What journey are you ready to begin today?" },
        { quote: "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.", author: "Aristotle", lesson: "Excellence is a system, not an event.", reflection: "How will you systematize excellence in your daily practice?" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", lesson: "Belief is the foundation of achievement.", reflection: "What dream deserves your unwavering belief today?" },
        { quote: "Discipline is the bridge between goals and accomplishment.", author: "Khamare Clarke", lesson: "Discipline transforms dreams into reality.", reflection: "Where do you need more discipline to bridge the gap to your goals?" },
        { quote: "Focus is not about doing more things right, but doing the right things.", author: "Khamare Clarke", lesson: "Clarity precedes mastery.", reflection: "What is the one right thing you must focus on today?" },
        { quote: "Momentum is built one decision at a time.", author: "Khamare Clarke", lesson: "Small choices compound into massive results.", reflection: "What decision will you make today to build unstoppable momentum?" },
        { quote: "You are what you do, not what you say you'll do.", author: "Carl Jung", lesson: "Identity is forged through action.", reflection: "What actions today will align with who you want to become?" },
        { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", lesson: "Perfect timing is a myth.", reflection: "What have you been waiting for the 'right time' to start?" },
        
        // Days 11-20: Momentum Building
        { quote: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier", lesson: "Consistency compounds exponentially.", reflection: "What small effort can you repeat today to build your empire?" },
        { quote: "The cave you fear to enter holds the treasure you seek.", author: "Joseph Campbell", lesson: "Growth lives outside your comfort zone.", reflection: "What fear is actually pointing you toward your greatest opportunity?" },
        { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", lesson: "Persistence outlasts resistance.", reflection: "How can you maintain momentum when motivation fades?" },
        { quote: "Your limitation—it's only your imagination.", author: "Unknown", lesson: "Mental barriers are self-imposed.", reflection: "What limitation are you ready to prove wrong today?" },
        { quote: "Great things never come from comfort zones.", author: "Neil Strauss", lesson: "Comfort is the enemy of greatness.", reflection: "What comfort zone will you step out of today?" },
        { quote: "Dream it. Wish it. Do it.", author: "Unknown", lesson: "Action transforms dreams into reality.", reflection: "What dream needs your immediate action today?" },
        { quote: "Success doesn't just find you. You have to go out and get it.", author: "Unknown", lesson: "Success is actively pursued, not passively received.", reflection: "What will you actively pursue today to create your success?" },
        { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown", lesson: "Effort amplifies satisfaction.", reflection: "What are you willing to work harder for today?" },
        { quote: "Dream bigger. Do bigger.", author: "Unknown", lesson: "Your actions should match your ambitions.", reflection: "How can you scale your actions to match your biggest dreams?" },
        { quote: "Don't stop when you're tired. Stop when you're done.", author: "Marilyn Monroe", lesson: "Completion matters more than comfort.", reflection: "What will you complete today, regardless of how you feel?" },
        
        // Days 21-30: System Optimization
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", lesson: "Execution trumps explanation.", reflection: "What conversation needs to become action today?" },
        { quote: "It always seems impossible until it's done.", author: "Nelson Mandela", lesson: "Impossibility is often an illusion.", reflection: "What 'impossible' goal will you take one step toward today?" },
        { quote: "If you're going through hell, keep going.", author: "Winston Churchill", lesson: "Persistence through adversity builds character.", reflection: "What challenge will you push through today instead of avoiding?" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", lesson: "Belief is the foundation of achievement.", reflection: "What do you need to believe about yourself to succeed today?" },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", lesson: "Passion fuels excellence.", reflection: "How can you bring more love to your work today?" },
        { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", lesson: "Leadership requires creative thinking.", reflection: "How will you innovate in your approach today?" },
        { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs", lesson: "Authenticity is your competitive advantage.", reflection: "How will you honor your authentic path today?" },
        { quote: "Stay hungry. Stay foolish.", author: "Steve Jobs", lesson: "Curiosity and ambition drive growth.", reflection: "What will you be hungry and foolish enough to pursue today?" },
        { quote: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs", lesson: "Audacious thinking creates breakthrough results.", reflection: "What world-changing idea will you act on today?" },
        { quote: "Quality is not an act, it is a habit.", author: "Aristotle", lesson: "Excellence is a daily practice.", reflection: "How will you practice quality in everything you do today?" },
        
        // Days 31-40: Mastery Development  
        { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", lesson: "Identity is shaped by consistent action.", reflection: "What habit will you strengthen today to become who you want to be?" },
        { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", lesson: "Destiny is a choice, not fate.", reflection: "Who are you deciding to become through today's actions?" },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", lesson: "Inner strength determines outer success.", reflection: "What inner strength will you draw upon today?" },
        { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", lesson: "Leadership means creating new possibilities.", reflection: "What new path will you create today?" },
        { quote: "The mind is everything. What you think you become.", author: "Buddha", lesson: "Thoughts shape reality.", reflection: "What empowering thoughts will you cultivate today?" },
        { quote: "Peace comes from within. Do not seek it without.", author: "Buddha", lesson: "Inner peace is the foundation of outer success.", reflection: "How will you cultivate inner peace amidst today's challenges?" },
        { quote: "Three things cannot be long hidden: the sun, the moon, and the truth.", author: "Buddha", lesson: "Authenticity always emerges.", reflection: "What truth about yourself will you honor today?" },
        { quote: "Better than a thousand hollow words, is one word that brings peace.", author: "Buddha", lesson: "Quality matters more than quantity.", reflection: "What meaningful words will you speak today?" },
        { quote: "Hatred does not cease by hatred, but only by love; this is the eternal rule.", author: "Buddha", lesson: "Love is more powerful than force.", reflection: "How will you lead with love today?" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates", lesson: "Humility opens the door to learning.", reflection: "What will you approach with beginner's mind today?" },
        
        // Days 41-50: Leadership Emergence
        { quote: "An unexamined life is not worth living.", author: "Socrates", lesson: "Self-reflection drives growth.", reflection: "What aspect of your life needs deeper examination today?" },
        { quote: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.", author: "Socrates", lesson: "Creation is more powerful than destruction.", reflection: "What new reality will you build today instead of fighting the old?" },
        { quote: "He who is not a good servant will not be a good master.", author: "Plato", lesson: "Leadership begins with service.", reflection: "How will you serve others while pursuing your goals today?" },
        { quote: "Courage is knowing what not to fear.", author: "Plato", lesson: "Wisdom distinguishes real from imaginary threats.", reflection: "What fear will you recognize as powerless today?" },
        { quote: "The first and greatest victory is to conquer yourself.", author: "Plato", lesson: "Self-mastery precedes external success.", reflection: "What aspect of yourself will you master today?" },
        { quote: "I cannot teach anybody anything. I can only make them think.", author: "Galileo", lesson: "True education sparks independent thought.", reflection: "What will you think deeply about today?" },
        { quote: "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.", author: "Galileo", lesson: "Truth matters more than consensus.", reflection: "What truth will you stand for today, regardless of popular opinion?" },
        { quote: "You cannot teach a man anything, you can only help him find it within himself.", author: "Galileo", lesson: "Answers lie within us.", reflection: "What wisdom within yourself will you discover today?" },
        { quote: "Passion is the genesis of genius.", author: "Galileo", lesson: "Intense interest creates breakthrough thinking.", reflection: "What are you passionate enough about to pursue with genius today?" },
        { quote: "I have never made but one prayer to God, a very short one: Oh Lord, make my enemies ridiculous. And God granted it.", author: "Voltaire", lesson: "Humor disarms opposition.", reflection: "How can you approach today's challenges with lightness and wisdom?" },
        
        // Days 51-60: Influence Expansion
        { quote: "Common sense is not so common.", author: "Voltaire", lesson: "Wisdom is rare and valuable.", reflection: "What common sense wisdom will you apply today?" },
        { quote: "Judge a man by his questions rather than his answers.", author: "Voltaire", lesson: "Questions reveal thinking quality.", reflection: "What powerful questions will you ask today?" },
        { quote: "It is difficult to free fools from the chains they revere.", author: "Voltaire", lesson: "People often resist their own liberation.", reflection: "What limiting belief will you free yourself from today?" },
        { quote: "The perfect is the enemy of the good.", author: "Voltaire", lesson: "Progress beats perfection.", reflection: "What good action will you take today instead of waiting for perfect conditions?" },
        { quote: "Doubt is not a pleasant condition, but certainty is absurd.", author: "Voltaire", lesson: "Intellectual humility enables learning.", reflection: "What certainty are you willing to question today?" },
        { quote: "The best way to find out if you can trust somebody is to trust them.", author: "Ernest Hemingway", lesson: "Trust is both a risk and a revelation.", reflection: "Who will you choose to trust today?" },
        { quote: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.", author: "Ernest Hemingway", lesson: "Growth is the only meaningful competition.", reflection: "How will you be superior to yesterday's version of yourself?" },
        { quote: "Courage is grace under pressure.", author: "Ernest Hemingway", lesson: "Character is revealed in difficult moments.", reflection: "How will you demonstrate grace under today's pressures?" },
        { quote: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway", lesson: "Adversity can create strength.", reflection: "How have your broken places become sources of strength?" },
        { quote: "All you have to do is write one true sentence. Write the truest sentence that you know.", author: "Ernest Hemingway", lesson: "Truth is the foundation of all creation.", reflection: "What is the truest thing you know about your purpose today?" },
        
        // Days 61-70: Wisdom Integration
        { quote: "The best revenge is massive success.", author: "Frank Sinatra", lesson: "Success speaks louder than words.", reflection: "How will you let your success speak for you today?" },
        { quote: "I'm gonna live till I die.", author: "Frank Sinatra", lesson: "Full engagement with life is a choice.", reflection: "How will you live fully today?" },
        { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West", lesson: "Quality of life matters more than quantity.", reflection: "What would 'doing it right' look like in your life today?" },
        { quote: "I never said it would be easy, I only said it would be worth it.", author: "Mae West", lesson: "Value justifies difficulty.", reflection: "What difficult but worthwhile action will you take today?" },
        { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman", lesson: "Focus determines experience.", reflection: "What sunshine will you face today to leave shadows behind?" },
        { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", lesson: "Authenticity is your unique advantage.", reflection: "How will you be more authentically yourself today?" },
        { quote: "I can resist everything except temptation.", author: "Oscar Wilde", lesson: "Self-awareness includes acknowledging weaknesses.", reflection: "What temptation will you resist today?" },
        { quote: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde", lesson: "Perspective transforms circumstances.", reflection: "What stars will you focus on today despite current challenges?" },
        { quote: "Experience is merely the name men gave to their mistakes.", author: "Oscar Wilde", lesson: "Mistakes become wisdom through reflection.", reflection: "What recent mistake has become valuable experience?" },
        { quote: "The only way to get rid of temptation is to yield to it.", author: "Oscar Wilde", lesson: "Sometimes we must face what we avoid.", reflection: "What positive temptation will you yield to today?" },
        
        // Days 71-80: Legacy Building
        { quote: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain", lesson: "Purpose gives life meaning.", reflection: "How does today's work connect to your deeper why?" },
        { quote: "Courage is resistance to fear, mastery of fear—not absence of fear.", author: "Mark Twain", lesson: "Bravery is action despite fear.", reflection: "What will you do today despite feeling afraid?" },
        { quote: "The secret of getting ahead is getting started.", author: "Mark Twain", lesson: "Initiation is half the battle.", reflection: "What have you been delaying that you'll start today?" },
        { quote: "Kindness is the language which the deaf can hear and the blind can see.", author: "Mark Twain", lesson: "Kindness transcends all barriers.", reflection: "How will you speak the language of kindness today?" },
        { quote: "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.", author: "Mark Twain", lesson: "Entitlement blocks achievement.", reflection: "What value will you create for the world today?" },
        { quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.", author: "Dolly Parton", lesson: "Beauty requires enduring difficulty.", reflection: "What rain are you willing to endure for your rainbow?" },
        { quote: "If you don't like the road you're walking, start paving another one.", author: "Dolly Parton", lesson: "You have the power to change your path.", reflection: "What new road will you start paving today?" },
        { quote: "Find out who you are and do it on purpose.", author: "Dolly Parton", lesson: "Intentional authenticity creates impact.", reflection: "How will you be yourself on purpose today?" },
        { quote: "You'll never do a whole lot unless you're brave enough to try.", author: "Dolly Parton", lesson: "Courage is the prerequisite for achievement.", reflection: "What will you be brave enough to try today?" },
        { quote: "The magic is inside you. There ain't no crystal ball.", author: "Dolly Parton", lesson: "You have everything you need within you.", reflection: "What magic within yourself will you access today?" },
        
        // Days 81-90: Mastery & Completion
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker", lesson: "Proactive creation beats reactive response.", reflection: "What future will you create through today's actions?" },
        { quote: "Management is doing things right; leadership is doing the right things.", author: "Peter Drucker", lesson: "Effectiveness matters more than efficiency.", reflection: "What right thing will you focus on today?" },
        { quote: "Innovation is the specific instrument of entrepreneurship.", author: "Peter Drucker", lesson: "Innovation drives value creation.", reflection: "How will you innovate in your approach today?" },
        { quote: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.", author: "Peter Drucker", lesson: "Learning is a continuous process.", reflection: "What knowledge will you improve or challenge today?" },
        { quote: "The most important thing in communication is hearing what isn't said.", author: "Peter Drucker", lesson: "Deep listening reveals hidden truths.", reflection: "What unspoken message will you listen for today?" },
        { quote: "Results are gained by exploiting opportunities, not by solving problems.", author: "Peter Drucker", lesson: "Focus on possibilities, not just problems.", reflection: "What opportunity will you exploit today?" },
        { quote: "Efficiency is doing things right; effectiveness is doing the right things.", author: "Peter Drucker", lesson: "Direction matters more than speed.", reflection: "How will you be more effective today?" },
        { quote: "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.", author: "Peter Drucker", lesson: "Change is the source of opportunity.", reflection: "What change will you turn into opportunity today?" },
        { quote: "Plans are only good intentions unless they immediately degenerate into hard work.", author: "Peter Drucker", lesson: "Execution transforms plans into reality.", reflection: "What plan will you execute with hard work today?" },
        { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln", lesson: "You are the architect of your destiny.", reflection: "What destiny will you architect today?" }
    ];
    
    // Generate ALL 90 daily pages
    let currentPageNumber = 19;
    for (let day = 1; day <= 90; day++) {
        const quote = uniqueQuotes[day - 1];
        
        html += generateDailyPage(day, quote, currentPageNumber);
        currentPageNumber++;
        
        // Add weekly review every 7th day (except day 90)
        if (day % 7 === 0 && day < 90) {
            html += generateWeeklyReview(Math.ceil(day / 7), currentPageNumber);
            currentPageNumber++;
        }
        
        // Add reward checkpoints every 30 days
        if (day % 30 === 0) {
            html += generateRewardCheckpoint(day, currentPageNumber);
            currentPageNumber++;
        }
    }
    
    return html;
}

function generateDailyPage(day, quote, pageNumber) {
    return `
    <!-- DAY ${day} -->
    <div class="page daily-page">
        <div class="daily-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0rem; margin-top: 0rem;">
            <div class="day-number" style="background: var(--gold); color: var(--black); padding: 0.15rem 0.3rem; border-radius: 6px; font-weight: bold; font-size: 0.6rem;">
                DAY ${day}
            </div>
            <div class="date-section" style="display: flex; align-items: center; gap: 1rem;">
                <div class="date-field" style="color: var(--gray); border-bottom: 1px solid var(--gray-dark); padding: 0.2rem; min-width: 90px; font-size: 0.75rem;">
                    DATE: _______________
                </div>
                <div class="day-tracker" style="display: flex; gap: 0.12rem; color: var(--gray); font-size: 0.75rem;">
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">M</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">T</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">W</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">T</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">F</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">S</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">S</span>
                </div>
            </div>
        </div>
        
        <div class="gratitude-section" style="background: var(--black-soft); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.15rem;">
            <h4 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.85rem;">🙏 TODAY I AM GRATEFUL FOR</h4>
            <div class="writing-lines">
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 24px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 24px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 24px;"></div>
            </div>
        </div>
        
        <div class="todays-goal-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.15rem; border-left: 1px solid var(--gold);">
            <h4 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.85rem;">🎯 TODAY'S 3 PRIORITIES</h4>
            
            <div class="jobs-priorities" style="display: grid; gap: 0.1rem;">
                <div class="priority-box" style="background: var(--black-soft); padding: 0.2rem; border-radius: 1px; border-left: 1px solid var(--gold);">
                    <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                        <span style="color: var(--gold); font-weight: bold; margin-right: 0.25rem; font-size: 0.8rem;">1.</span>
                        <span style="color: var(--gold-light); font-size: 0.8rem;">MOST IMPORTANT</span>
                    </div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
                
                <div class="priority-box" style="background: var(--black-soft); padding: 0.2rem; border-radius: 1px; border-left: 1px solid #FF9500;">
                    <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                        <span style="color: #FF9500; font-weight: bold; margin-right: 0.25rem; font-size: 0.8rem;">2.</span>
                        <span style="color: #FF9500; font-size: 0.8rem;">HIGH IMPACT</span>
                    </div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
                
                <div class="priority-box" style="background: var(--black-soft); padding: 0.2rem; border-radius: 1px; border-left: 1px solid #34C759;">
                    <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                        <span style="color: #34C759; font-weight: bold; margin-right: 0.25rem; font-size: 0.8rem;">3.</span>
                        <span style="color: #34C759; font-size: 0.8rem;">STRATEGIC MOVE</span>
                    </div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="quote-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 2px; border-left: 1px solid var(--gold); margin-bottom: 0.15rem;">
            <blockquote style="color: var(--gold-light); font-size: 0.8rem; font-style: italic; margin-bottom: 0.18rem;">
                "${quote.quote}"
            </blockquote>
            <cite style="color: var(--gray); font-size: 0.8rem;">— ${quote.author}</cite>
            
            <div class="lesson" style="margin-top: 0.2rem; padding-top: 0.2rem; border-top: 1px solid var(--gray-dark);">
                <strong style="color: var(--gold); font-size: 0.8rem;">Today's Lesson:</strong> 
                <span style="color: var(--gray-light); font-size: 0.8rem;">${quote.lesson}</span>
            </div>
        </div>
        
        <div class="daily-review-section" style="background: var(--black-soft); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.15rem; border-top: 1px solid var(--gold);">
            <h4 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.85rem;">📝 DAILY REVIEW</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem;">
                <div>
                    <label style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.18rem; display: block;">What went well today?</label>
                    <div class="writing-lines">
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                </div>
                <div>
                    <label style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.18rem; display: block;">What could be improved?</label>
                    <div class="writing-lines">
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tracking-section" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.2rem; margin-bottom: 0.15rem;">
            <div class="tracker" style="text-align: center; padding: 0.25rem; background: var(--black-card); border-radius: 2px;">
                <h5 style="color: var(--gold); margin-bottom: 0.1rem; font-size: 0.7rem;">Energy</h5>
                <div style="color: var(--gray); font-size: 0.7rem;">1 2 3 4 5</div>
            </div>
            <div class="tracker" style="text-align: center; padding: 0.25rem; background: var(--black-card); border-radius: 2px;">
                <h5 style="color: var(--gold); margin-bottom: 0.1rem; font-size: 0.7rem;">Mood</h5>
                <div style="color: var(--gray); font-size: 0.7rem;">😞 😐 🙂 😊 🤩</div>
            </div>
            <div class="tracker" style="text-align: center; padding: 0.25rem; background: var(--black-card); border-radius: 2px;">
                <h5 style="color: var(--gold); margin-bottom: 0.1rem; font-size: 0.7rem;">Focus</h5>
                <div style="color: var(--gray); font-size: 0.7rem;">1 2 3 4 5</div>
            </div>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">${getDailyQuote(day)}</div>
    </div>`;
}

function generateWeeklyReview(week, pageNumber) {
    return `
    <!-- WEEK ${week} REVIEW -->
    <div class="page weekly-review">
        <div class="section-icon mb-6" style="margin-top: -2rem;">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17ZM17 21V11H13V7H7V19H17Z" stroke="var(--gold)" stroke-width="2"/>
            </svg>
        </div>
        
        <h1 class="text-center gold-gradient mb-4" style="font-size: 2.5rem; margin-top: -1.5rem;">WEEK ${week} REVIEW</h1>
        <div class="gold-line"></div>
        
        <div class="review-sections">
            <div class="review-section" style="margin-bottom: 1.5rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">🏆 This Week's Biggest Wins</h3>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
            </div>
            
            <div class="review-section" style="margin-bottom: 1.5rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">📚 Key Lessons Learned</h3>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
            </div>
            
            <div class="review-section">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">🎯 Next Week's Focus</h3>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
            </div>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">"${getWeeklyQuote(week)}"</div>
    </div>`;
}

function generateRewardCheckpoint(day, pageNumber) {
    const checkpoints = {
        30: {
            title: "30-DAY MILESTONE",
            message: "You've built the foundation of transformation. The first 30 days are the hardest—you've proven you can do this.",
            celebration: "🎉 🏆 🎉",
            reward: "You've earned the right to call yourself disciplined.",
            quote: "Discipline is the bridge between goals and accomplishment."
        },
        60: {
            title: "60-DAY POWERHOUSE", 
            message: "You're no longer the person who started this journey. You've developed systems, habits, and momentum that compound daily.",
            celebration: "🚀 ⭐ 🚀",
            reward: "You've earned the right to call yourself unstoppable.",
            quote: "Systems create freedom. Habits create leverage."
        },
        90: {
            title: "90-DAY DIGITAL ALCHEMIST",
            message: "You have completed something extraordinary. You are now among the 8% who finish what they start. You are a Digital Alchemist.",
            celebration: "👑 💎 👑", 
            reward: "You've earned the right to call yourself a master.",
            quote: "What gets measured gets mastered."
        }
    };
    
    const checkpoint = checkpoints[day];
    
    return `
    <!-- ${day}-DAY REWARD CHECKPOINT -->
    <div class="page reward-checkpoint" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
        <div class="celebration-icon" style="margin-bottom: 2rem;">
            <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">
                ${checkpoint.celebration}
            </div>
        </div>
        
        <h1 class="gold-gradient" style="font-size: 2.2rem; font-family: 'Cormorant Garamond', serif; text-align: center; margin-bottom: 1.5rem;">
            ${checkpoint.title}
        </h1>
        
        <div class="gold-line" style="width: 300px; height: 2px; background: var(--gold); margin: 0 auto 2rem;"></div>
        
        <div class="checkpoint-message" style="background: var(--black-card); padding: 2rem; border-radius: 12px; border: 2px solid var(--gold); text-align: center; max-width: 400px; margin-bottom: 2rem;">
            <p style="color: var(--gray-light); font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">
                ${checkpoint.message}
            </p>
            
            <div style="background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%); color: var(--black); padding: 1rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem;">
                ${checkpoint.reward}
            </div>
        </div>
        
        <div class="signature-section" style="text-align: center; margin-bottom: 2rem;">
            <p style="color: var(--gold); margin-bottom: 1rem; font-size: 0.9rem;">Sign your name to claim this achievement:</p>
            <div style="border-bottom: 3px solid var(--gold); width: 280px; height: 1.5rem; margin: 0 auto 0.5rem;"></div>
            <p style="color: var(--gray); font-size: 0.8rem;">Your Signature</p>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">"${checkpoint.quote}" — Khamare Clarke</div>
    </div>`;
}
// CHAPTER 4 - REVIEW
function generateChapter4Review() {
    return `
    <!-- CHAPTER 4 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="chapter-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--gold)" stroke-width="2"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 4
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            REVIEW
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Reflection turns experience into wisdom.<br>
            Measure what matters.<br>
            <span class="gold-gradient font-semibold">Optimize for excellence.</span>
        </p>
        
        <div class="qr-enhanced">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="var(--black)">
                <rect width="80" height="80" fill="var(--black)" rx="4"/>
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="var(--gold)" stroke-width="2"/>
                <text x="40" y="45" text-anchor="middle" fill="var(--gold)" font-size="8">QR_05</text>
            </svg>
            <div class="qr-caption">Access Progress Analytics<br><code>leverage.app/progress</code></div>
        </div>
        
        <div class="page-number">121</div>
    </div>
    
    <!-- PAGE 122: PROGRESS ANALYTICS -->
    <div class="page" style="padding-bottom: 10mm; padding-top: 0;">
        <h1 class="text-center gold-gradient mb-0" style="font-size: 1.5rem; margin-top: 0.2rem;">PROGRESS ANALYTICS</h1>
        <div class="gold-line mb-0"></div>
        
        <div class="analytics-sections" style="margin-top: 0.3rem;">
            <div class="metric-section" style="background: var(--black-card); padding: 0.4rem; border-radius: 6px; margin-bottom: 0.3rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.8rem;">📊 Transformation Metrics</h3>
                
                <div class="metrics-grid" style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <div class="metric">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.1rem; font-size: 0.75rem;">Health Score</h4>
                        <div style="color: var(--gray); font-size: 0.7rem;">Start: ___/10 → End: ___/10</div>
                    </div>
                    <div class="metric">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.1rem; font-size: 0.75rem;">Wealth Progress</h4>
                        <div style="color: var(--gray); font-size: 0.7rem;">Start: $_____ → End: $_____</div>
                    </div>
                    <div class="metric">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.1rem; font-size: 0.75rem;">Focus Level</h4>
                        <div style="color: var(--gray); font-size: 0.7rem;">Start: ___/10 → End: ___/10</div>
                    </div>
                </div>
            </div>
            
            <div class="reflection-section" style="margin-bottom: 0.5rem; margin-top: 0.3rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">🎯 90-Day Transformation Summary</h3>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">My Greatest Achievements:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                </div>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">Key Lessons Learned:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                </div>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">What Needs Refinement:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">122</div>
        <div class="footer-wisdom" style="font-size: 0.65rem;">"The cave you fear to enter holds the treasure you seek." — Joseph Campbell</div>
    </div>`;
}

// CHAPTER 5 - LEGACY
function generateChapter5Legacy() {
    return `
    <!-- CHAPTER 5 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="chapter-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" opacity="0.1"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 5
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            LEGACY
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Your transformation is complete.<br>
            Your legacy begins now.<br>
            <span class="gold-gradient font-semibold">Build your empire.</span>
        </p>
        
        <div class="qr-enhanced">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="var(--black)">
                <rect width="80" height="80" fill="var(--black)" rx="4"/>
                <rect x="10" y="10" width="60" height="60" fill="none" stroke="var(--gold)" stroke-width="2"/>
                <text x="40" y="45" text-anchor="middle" fill="var(--gold)" font-size="8">QR_07</text>
            </svg>
            <div class="qr-caption">Join Builder's Guild<br><code>leverage.app/guild</code></div>
        </div>
        
        <div class="page-number">123</div>
    </div>
    
    <!-- PAGE 124: THE DIGITAL ALCHEMIST -->
    <div class="page" style="padding-bottom: 50mm;">
        <div class="philosophy-section" style="padding: 1rem; padding-bottom: 2rem;">
            <h1 class="philosophy-title" style="font-size: 1.5rem; margin-bottom: 0.5rem;">The Digital Alchemist</h1>
            <h2 style="color: var(--gold-light); text-align: center; margin-bottom: 0.75rem; font-style: italic; font-size: 0.9rem;">Turning Action Into Freedom</h2>
            
            <div class="philosophy-essay" style="margin-bottom: 0;">
                <p style="font-size: 0.75rem; line-height: 1.3; margin-bottom: 0.5rem;">You have completed something extraordinary. In a world where 92% abandon their goals, you have systematically transformed your life over 90 days. You are no longer the person who started—you are the person who finishes.</p>
                
                <p style="font-size: 0.75rem; line-height: 1.3; margin-bottom: 0.5rem;">The ancient alchemists sought to turn base metals into gold. You have achieved something far more valuable: you have turned daily actions into lasting transformation. Every page, every reflection, every priority has compounded into who you are today.</p>
                
                <p style="font-size: 0.75rem; line-height: 1.3; margin-bottom: 0.5rem;">But this is not the end—it is the beginning. You now possess a proven system for continuous improvement. You have become a Digital Alchemist, someone who can systematically transform any area of life.</p>
                
                <div class="transformation-summary" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 3px solid var(--gold); margin: 0.75rem 0;">
                    <h4 style="color: var(--gold); margin-bottom: 0.4rem; font-size: 0.8rem;">Your Alchemical Formula</h4>
                    <div style="color: var(--gray-light); line-height: 1.4; font-size: 0.7rem;">
                        <p style="margin-bottom: 0.25rem;"><strong style="color: var(--gold);">Vision</strong> + <strong style="color: var(--gold);">System</strong> + <strong style="color: var(--gold);">Consistency</strong> = <strong style="color: var(--gold);">Transformation</strong></p>
                        <p style="margin-bottom: 0.25rem;"><strong style="color: var(--gold);">Analog Discipline</strong> + <strong style="color: var(--gold);">Digital Intelligence</strong> = <strong style="color: var(--gold);">Leverage</strong></p>
                        <p style="margin-bottom: 0;"><strong style="color: var(--gold);">Individual Excellence</strong> + <strong style="color: var(--gold);">Community Power</strong> = <strong style="color: var(--gold);">Empire</strong></p>
                    </div>
                </div>
                
                <p style="font-size: 0.75rem; line-height: 1.3; margin-bottom: 0.5rem;">The world needs more Digital Alchemists—people who refuse mediocrity, who understand technology amplifies wisdom, and who build systems that create freedom.</p>
                
                <div class="reflection-prompt" style="font-size: 0.7rem; padding: 0.4rem; margin-bottom: 0;">
                    <strong>Final Reflection:</strong> How will you use your alchemical powers to transform not just your life, but others'?
                </div>
            </div>
        </div>
        
        <div class="page-number">124</div>
        <div class="footer-wisdom" style="font-size: 0.7rem;">"I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion." — Alexander the Great</div>
    </div>
    
    <!-- PAGE 135: CERTIFICATE OF COMPLETION -->
    <div class="page certificate-page flex flex-col items-center justify-center">
        <div class="certificate-border" style="border: 3px solid var(--gold); padding: 1.5rem; border-radius: 15px; text-align: center; max-width: 500px;">
            <div class="crown-icon mb-4">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M5 16L3 7L8.5 10L12 4L15.5 10L21 7L19 16H5Z" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" opacity="0.2"/>
                </svg>
            </div>
            
            <h1 style="color: var(--gold); font-size: 1.5rem; margin: 0.5rem 0; font-family: 'Cormorant Garamond', serif;">
                CERTIFICATE OF COMPLETION
            </h1>
            
            <div class="gold-line" style="width: 200px; margin: 0.2rem auto 0.5rem;"></div>
            
            <p style="color: var(--gray-light); margin: 0.2rem 0 1rem 0; line-height: 1.4; font-size: 0.85rem;">
                This certifies that
            </p>
            
            <div style="border-bottom: 3px solid var(--gold); padding: 1.2rem 0.8rem; margin: 0 auto 1.5rem auto; min-width: 350px; min-height: 60px; text-align: center; display: flex; align-items: center; justify-content: center;">
                <span style="color: var(--gold-light); font-size: 1rem; font-weight: normal; letter-spacing: 0.5px; opacity: 0.7;">
                    [Your Name]
                </span>
            </div>
            
            <p style="color: var(--gray-light); margin: 0 0 1rem 0; line-height: 1.4; font-size: 0.9rem;">
                has successfully completed<br>
                <strong style="color: var(--gold);">The Leverage Journal™</strong><br>
                90-Day Transformation System
            </p>
            
            <div style="margin-bottom: 1rem;">
                <p style="color: var(--gray); font-size: 0.8rem;">Completion Date:</p>
                <div style="border-bottom: 1px solid var(--gold-dark); padding: 0.4rem; margin: 0.4rem 0; min-width: 180px;">
                    _______________
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
                <div>
                    <div style="border-bottom: 1px solid var(--gold-dark); padding: 0.4rem; margin-bottom: 0.4rem;"></div>
                    <p style="color: var(--gray); font-size: 0.7rem;">Your Signature</p>
                </div>
                <div>
                    <div style="border-bottom: 1px solid var(--gold-dark); padding: 0.4rem; margin-bottom: 0.4rem;"></div>
                    <p style="color: var(--gray); font-size: 0.7rem;">Accountability Partner</p>
                </div>
            </div>
        </div>
        
        <p style="color: var(--gold); margin-top: 1rem; font-style: italic; font-size: 0.9rem;">
            "You are now a certified Digital Alchemist."
        </p>
        
        <div class="page-number">125</div>
    </div>
    
    <!-- PAGE 136: BUILDER'S GUILD INVITATION -->
    <div class="page flex flex-col items-center justify-center">
        <div class="guild-invitation" style="text-align: center; max-width: 500px;">
            <div class="guild-icon mb-4">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="var(--gold)" stroke-width="2"/>
                </svg>
            </div>
            
            <h1 class="gold-gradient mb-4" style="font-size: 2rem; font-family: 'Cormorant Garamond', serif;">
                Builder's Guild
            </h1>
            
            <div class="gold-line mb-4" style="width: 200px; margin: 0 auto;"></div>
            
            <p style="color: var(--gray-light); font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.4;">
                You have proven yourself worthy.<br>
                Join the elite community of empire builders.
            </p>
            
            <div class="guild-benefits" style="background: var(--black-card); padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.75rem; font-size: 0.95rem;">Exclusive Access To:</h3>
                <ul style="color: var(--gray-light); line-height: 1.5; text-align: left; font-size: 0.8rem; padding-left: 1rem;">
                    <li style="margin-bottom: 0.3rem;">• Monthly mastermind with Khamare Clarke</li>
                    <li style="margin-bottom: 0.3rem;">• Advanced AI CoPilot features</li>
                    <li style="margin-bottom: 0.3rem;">• Private community of high-achievers</li>
                    <li style="margin-bottom: 0.3rem;">• Exclusive challenges and competitions</li>
                    <li style="margin-bottom: 0.3rem;">• Early access to new tools</li>
                    <li>• Accountability partner matching</li>
                </ul>
            </div>
            
            <div class="application-qr" style="margin-bottom: 1rem;">
                <svg width="90" height="90" viewBox="0 0 100 100" fill="var(--black)">
                    <rect width="100" height="100" fill="var(--black)" rx="8"/>
                    <rect x="15" y="15" width="70" height="70" fill="none" stroke="var(--gold)" stroke-width="3"/>
                    <text x="50" y="55" text-anchor="middle" fill="var(--gold)" font-size="10" font-weight="bold">APPLY</text>
                </svg>
                <div style="color: var(--gray); margin-top: 0.5rem; font-size: 0.8rem;">
                    Scan to apply<br>
                    <code style="color: var(--gold); font-size: 0.75rem;">leverage.app/guild/apply</code>
                </div>
            </div>
            
            <p style="color: var(--gold); font-size: 0.85rem; font-weight: 600;">
                Application Required • Limited Membership
            </p>
        </div>
        
        <div class="page-number">126</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"The best way to find out if you can trust somebody is to trust them." — Ernest Hemingway</div>
    </div>`;
}
// BACK MATTER
function generateBackMatter() {
    return `
    <!-- PAGE 127: INDEX -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">INDEX</h1>
        <div class="gold-line" style="margin-bottom: 1rem;"></div>
        
        <div class="index-content" style="columns: 2; column-gap: 1.5rem; margin-top: 1rem;">
            <div class="index-section">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">A</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Accountability Partner, 016</div>
                    <div>AI CoPilot, 022+</div>
                    <div>Alchemical Formula, 209</div>
                    <div>Analytics, 204</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">B</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Builder's Guild, 211</div>
                    <div>Business Habits, 203</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">C</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Certificate, 210</div>
                    <div>Chapter System, 008+</div>
                    <div>Compound Focus, 018</div>
                    <div>Consistency, 009</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">D</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Daily Pages, 022-201</div>
                    <div>Digital Alchemist, 209</div>
                    <div>Discipline, 203</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">E</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Energy Tracking, 022+</div>
                    <div>Excellence, 022</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">F</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Focus Framework, 010</div>
                    <div>Freedom Through Focus, 010</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">G-H</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Goals, 015</div>
                    <div>Habit Tracker, 203</div>
                    <div>Health Habits, 203</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">L</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Law of Leverage, 009</div>
                    <div>Laws (12), 018-020</div>
                    <div>Legacy, 208-211</div>
                    <div>Leverage System, 005</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">M</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Momentum Theory, 011</div>
                    <div>Mood Tracking, 022+</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">P-Q</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Philosophy, 006-011</div>
                    <div>Priorities (3), 022+</div>
                    <div>Progress Analytics, 204</div>
                    <div>QR Codes, 005+</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">R-S</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Reflection, 022+</div>
                    <div>Review Pages, 202-204</div>
                    <div>Strategic Constraint, 018</div>
                    <div>System Supremacy, 018</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">T-V</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Transformation, 202-211</div>
                    <div>Vision, 008-016</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">W</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Weekly Reviews, Every 7th</div>
                    <div>Wealth Habits, 203</div>
                </div>
            </div>
        </div>
        
        <div class="page-number">127</div>
    </div>
    
    <!-- PAGE 128: GLOSSARY -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">GLOSSARY</h1>
        <div class="gold-line" style="margin-bottom: 1rem;"></div>
        
        <div class="glossary-content" style="margin-top: 1rem;">
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Digital Alchemist</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Someone who systematically transforms any area of life through ancient wisdom and modern technology.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Focus Framework</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Limiting daily priorities to three most important tasks to maximize impact.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Leverage</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Achieving maximum results with minimum effort through systems, tools, and principles.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Momentum Theory</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Consistent small actions compound over time, creating unstoppable progress.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Strategic Constraint</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Intelligent limitations that create unlimited possibilities by forcing focus.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">System Supremacy</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Well-designed systems consistently outperform motivation or willpower.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Builder's Guild</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Elite community of verified high-achievers who completed The Leverage Journal™.</p>
            </div>
        </div>
        
        <div class="page-number">128</div>
    </div>
    
    <!-- PAGE 129: CREDITS & CONTACT -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-3" style="font-size: 1.4rem;">CREDITS & CONTACT</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div class="credits-content" style="margin-top: 0.5rem;">
            <div class="author-section" style="text-align: center; margin-bottom: 1rem;">
                <div class="author-icon mb-2">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="var(--gold)" stroke-width="2"/>
                    </svg>
                </div>
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">KHAMARE CLARKE</h3>
                <p style="color: var(--gray-light); line-height: 1.3; max-width: 350px; margin: 0 auto; font-size: 0.7rem;">
                    Founder of Leverage Technologies and creator of The Leverage System. Khamare has helped thousands build systematic approaches to success through ancient wisdom and modern technology.
                </p>
            </div>
            
            <div class="contact-section" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; margin-bottom: 0.75rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; text-align: center; font-size: 0.8rem;">CONNECT WITH THE LEVERAGE ECOSYSTEM</h3>
                
                <div class="contact-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.75rem;">📧 Email</h4>
                        <p style="color: var(--gray); font-size: 0.65rem;">contact@leveragetechnologies.com</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.75rem;">🌐 Website</h4>
                        <p style="color: var(--gray); font-size: 0.65rem;">leverage.app</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.75rem;">👥 Community</h4>
                        <p style="color: var(--gray); font-size: 0.65rem;">leverage.app/guild</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.75rem;">🤖 AI CoPilot</h4>
                        <p style="color: var(--gray); font-size: 0.65rem;">leverage.app/copilot</p>
                    </div>
                </div>
            </div>
            
            <div class="acknowledgments" style="margin-bottom: 0.75rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.8rem;">ACKNOWLEDGMENTS</h3>
                <p style="color: var(--gray-light); line-height: 1.3; font-size: 0.65rem;">
                    Special thanks to beta users, philosophers and thinkers whose wisdom forms the foundation, and technology teams who made the digital ecosystem possible.
                </p>
            </div>
            
            <div class="final-qr" style="text-align: center;">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="var(--black)">
                    <rect width="100" height="100" fill="var(--black)" rx="8"/>
                    <rect x="15" y="15" width="70" height="70" fill="none" stroke="var(--gold)" stroke-width="3"/>
                    <text x="50" y="55" text-anchor="middle" fill="var(--gold)" font-size="8" font-weight="bold">LEVERAGE</text>
                </svg>
                <div style="color: var(--gray); margin-top: 0.3rem; font-size: 0.65rem;">
                    Start your next 90 days<br>
                    <code style="color: var(--gold); font-size: 0.6rem;">leverage.app/continue</code>
                </div>
            </div>
        </div>
        
        <div class="page-number">129</div>
        <div class="footer-wisdom" style="font-size: 0.65rem;">"The ultimate measure of a man is not where he stands in moments of comfort, but where he stands at times of challenge." — Martin Luther King Jr.</div>
    </div>`;
}

// BACK COVER
function generateBackCover() {
    return `
    <!-- BACK COVER -->
    <div class="page cover-page" style="background: linear-gradient(135deg, var(--black) 0%, var(--black-soft) 50%, var(--black) 100%); padding: 1.5rem; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;">
        
        <!-- MAIN HEADLINE -->
        <div class="back-headline" style="text-align: center; margin-bottom: 1rem;">
            <h1 class="gold-gradient" style="font-size: 1.6rem; font-family: 'Cormorant Garamond', serif; margin-bottom: 0.6rem; line-height: 1.1;">
                The World's Most Advanced Goal-Execution System
            </h1>
            <p style="color: var(--gold-light); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.75rem;">
                Finally, a system that makes success systematic and inevitable.
            </p>
        </div>
        
        <!-- WHAT IT IS -->
        <div class="what-it-is" style="margin-bottom: 1rem;">
            <h3 style="color: var(--gold); font-size: 1rem; margin-bottom: 0.6rem; text-align: center;">What Is The Leverage Journal™?</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; text-align: center;">
                A complete <strong style="color: var(--gold-light);">240+ page transformation system</strong> that combines ancient wisdom with cutting-edge technology. This isn't just a journal—it's your personal empire-building headquarters.
            </p>
        </div>
        
        <!-- WHAT YOU GET -->
        <div class="what-you-get" style="margin-bottom: 1rem;">
            <h3 style="color: var(--gold); font-size: 0.95rem; margin-bottom: 0.6rem; text-align: center;">What You Get:</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.8rem; font-size: 0.85rem;">
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">90-Day Transformation System</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">AI CoPilot Integration</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">12 Laws of Leverage</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Builder's Guild Access</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Digital App Ecosystem</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Legacy Time Capsule</strong></div>
            </div>
        </div>
        
        <!-- RESULTS PROMISE -->
        <div class="results-promise" style="background: var(--black-card); padding: 1.2rem; border-radius: 10px; border: 2px solid var(--gold); margin-bottom: 1.5rem; text-align: center;">
            <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.8rem;">Your 90-Day Transformation Promise:</h3>
            <div style="font-size: 0.9rem; color: var(--gray-light); line-height: 1.4;">
                <p style="margin-bottom: 0.5rem;">🎯 <strong style="color: var(--gold-light);">Crystal-clear vision</strong> of your empire</p>
                <p style="margin-bottom: 0.5rem;">⚡ <strong style="color: var(--gold-light);">Unbreakable daily habits</strong> that compound</p>
                <p style="margin-bottom: 0.5rem;">🚀 <strong style="color: var(--gold-light);">Systematic progress</strong> toward your biggest goals</p>
                <p>👑 <strong style="color: var(--gold-light);">Elite community</strong> of empire builders</p>
            </div>
        </div>
        
        <!-- USP -->
        <div class="usp-section" style="text-align: center; margin-bottom: 1.5rem;">
            <div style="background: linear-gradient(135deg, var(--gold) 0%, var(--gold-metallic) 100%); padding: 0.8rem; border-radius: 8px; margin-bottom: 1rem;">
                <p style="color: var(--black); font-weight: 700; font-size: 0.95rem; margin: 0;">
                    UNIQUE: The only journal that connects to AI, community, and digital intelligence
                </p>
            </div>
            <p style="color: var(--gray-light); font-size: 0.9rem; font-style: italic;">
                "While others just write goals, you'll build systems that make success inevitable."
            </p>
        </div>
        
        <!-- AUTHOR & QR -->
        <div class="bottom-section" style="display: flex; justify-content: space-between; align-items: center;">
            <div class="author-info">
                <p style="color: var(--gold-light); font-weight: 600; font-size: 0.95rem; margin-bottom: 0.3rem;">Khamare Clarke</p>
                <p style="color: var(--gray); font-size: 0.8rem;">Founder, Leverage Systems</p>
                <p style="color: var(--gray); font-size: 0.8rem;">Entrepreneur & System Builder</p>
            </div>
            
            <div class="qr-section" style="text-align: center;">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="var(--black)">
                    <rect width="70" height="70" fill="var(--black)" rx="6"/>
                    <rect x="8" y="8" width="54" height="54" fill="none" stroke="var(--gold)" stroke-width="2"/>
                    <text x="35" y="40" text-anchor="middle" fill="var(--gold)" font-size="7" font-weight="bold">START</text>
                </svg>
                <div style="color: var(--gold); margin-top: 0.3rem; font-size: 0.8rem; font-weight: 600;">
                    leverage.app
                </div>
            </div>
        </div>
    </div>`;
}

function initializeInteractiveElements() {
    // Initialize any interactive components
    console.log('Master journal initialized');
}
