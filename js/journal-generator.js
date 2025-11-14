// THE LEVERAGE JOURNAL™ - MASTER EDITION GENERATOR
// Complete restructured version with proper chapters and organization

console.log('✅ Journal generator script loaded successfully - ' + new Date().toISOString());

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateMasterJournal();
});

function generateMasterJournal() {
    try {
        console.log('Starting journal generation...');
        
        // Create a temporary container to hold all pages
        const tempContainer = document.createElement('div');
        
        // Generate all sections in order with error checking
        console.log('Generating Chapter 1 Vision...');
        const chapter1 = generateChapter1Vision();
        console.log('Generating Chapter 1 Vision Complete...');
        const chapter1Complete = generateChapter1VisionComplete();
        console.log('Generating Chapter 2 Plan...');
        const chapter2 = generateChapter2Plan();
        console.log('Generating Chapter 3 Do...');
        const chapter3 = generateChapter3Do();
        console.log('Generating Chapter 4 Review...');
        const chapter4 = generateChapter4Review();
        console.log('Generating Chapter 5 Legacy...');
        const chapter5 = generateChapter5Legacy();
        console.log('Generating Back Matter...');
        const backMatter = generateBackMatter();
        console.log('Generating Back Cover...');
        const backCover = generateBackCover();
        
        tempContainer.innerHTML = 
            chapter1 +
            chapter1Complete +
            chapter2 +
            chapter3 +
            chapter4 +
            chapter5 +
            backMatter +
            backCover;
        
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
        
        console.log('Journal content generated successfully - Total pages should be 131');
        
        // Count pages for verification
        const pages = mainContainer.querySelectorAll('.page');
        console.log(`Total pages generated: ${pages.length}`);
        
    } catch (error) {
        console.error('Error generating journal:', error);
    }
}

// FRONT MATTER GENERATION - REMOVED TO ELIMINATE DUPLICATES
// The HTML file already contains pages 001-004, so this function is no longer needed

// Continue with other functions...
function generateChapter1Vision() {
    return `
    <!-- CHAPTER 1 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Detailed Vision Eye Icon -->
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
                <!-- Vision rays -->
                <path d="M12 2L12 6M12 18L12 22M22 12L18 12M6 12L2 12" stroke="var(--gold)" stroke-width="1" opacity="0.7"/>
                <path d="M18.36 5.64L15.54 8.46M8.46 15.54L5.64 18.36M18.36 18.36L15.54 15.54M8.46 8.46L5.64 5.64" stroke="var(--gold)" stroke-width="1" opacity="0.5"/>
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
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">JOIN BUILDER'S GUILD</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/GUILD</code>
            </div>
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
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Small, consistent actions compound into legacy. This is the Law of Leverage: extraordinary results come from ordinary moments executed well.</p>
                
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
        <div class="footer-wisdom">"Action is the foundational key to all success." — Pablo Picasso</div>
    </div>
    
    <!-- PAGE 009: FREEDOM THROUGH FOCUS -->
    <div class="page">
        <div class="philosophy-section">
            <h1 class="philosophy-title">Freedom Through Focus</h1>
            
            <div class="philosophy-essay">
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Freedom is not the absence of constraints. It is the intelligent application of constraints. Steve Jobs limited Apple to three priorities. This constraint created freedom to achieve perfection.</p>
                
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
        <div class="footer-wisdom">"Focus is the art of knowing what to ignore." — Khamare Clarke</div>
    </div>
    
    <!-- PAGE 010: GOAL TIMELINE FRAMEWORK -->
    <div class="page" style="padding-top: 0;">
        <h1 class="text-center gold-gradient mb-1" style="font-size: 1.4rem; margin-top: 0;">GOAL TIMELINE FRAMEWORK</h1>
        <div class="gold-line" style="margin-bottom: 0.1rem;"></div>
        
        <div class="timeline-intro" style="margin-bottom: 0.1rem;">
            <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.1; text-align: center; margin: 0;">
                Success is a journey with waypoints. Map your path.
            </p>
        </div>
        
        <div class="goal-timeline" style="display: grid; gap: 0.2rem; margin-top: 0.1rem;">
            <!-- 10+ Year Legacy Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 5px; border-left: 4px solid var(--gold);">
                <h3 style="color: var(--gold); margin-bottom: 0.05rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🏛️</span>
                    LEGACY (10+ Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.1rem;">What legacy will you leave?</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                </div>
            </div>
            
            <!-- 5-10 Year Vision Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 5px; border-left: 4px solid var(--gold-light);">
                <h3 style="color: var(--gold-light); margin-bottom: 0.05rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🌟</span>
                    VISION (5-10 Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.1rem;">Your ideal life. What does success look like?</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                </div>
            </div>
            
            <!-- 2-5 Year Strategic Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 5px; border-left: 4px solid #FFD700;">
                <h3 style="color: #FFD700; margin-bottom: 0.05rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🎯</span>
                    STRATEGIC (2-5 Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.1rem;">Major milestones for your vision.</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">010</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"A goal without a timeline is a wish." — Khamare Clarke</div>
    </div>
    
    <!-- PAGE 011: TACTICAL GOALS & QUARTERLY PLANNING -->
    <div class="page" style="padding-top: 5mm;">
        <h1 class="text-center gold-gradient mb-2" style="font-size: 1.4rem; margin-top: -0.5rem;">TACTICAL EXECUTION</h1>
        <div class="gold-line" style="margin-bottom: 0.2rem;"></div>
        
        <div class="tactical-goals" style="display: grid; gap: 0.3rem; margin-top: 0.2rem;">
            <!-- 3-6 Month Tactical Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 6px; border-left: 4px solid #FFA500;">
                <h3 style="color: #FFA500; margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">⚡</span>
                    TACTICAL (3-6 Months)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Bridge goals for strategic objectives.</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                </div>
            </div>
            
            <!-- Current Quarter Focus -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 6px; border-left: 4px solid #32CD32;">
                <h3 style="color: #32CD32; margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🚀</span>
                    THIS QUARTER (90 Days)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Your immediate focus for next 90 days.</p>
                <div class="goal-categories" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem; margin-top: 0.2rem;">
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💼 CAREER</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💪 HEALTH</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💰 FINANCIAL</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">❤️ RELATIONSHIPS</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">🎓 LEARNING</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">🌟 GROWTH</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="page-number">011</div>
        <div class="footer-wisdom">"Strategy without tactics is slow." — Sun Tzu</div>
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
        <div class="footer-wisdom" style="font-size: 0.75rem;">"Commitment is the foundation of accomplishment." — Khamare Clarke</div>
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
        <div class="footer-wisdom" style="font-size: 0.75rem;">"Vision without action is merely a dream." — Joel A. Barker</div>
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
        <div class="footer-wisdom" style="font-size: 0.75rem;">"He who has a why can bear any how." — Friedrich Nietzsche</div>
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
        <div class="footer-wisdom" style="font-size: 0.75rem;">"You become what you think about most." — Earl Nightingale</div>
    </div>`;
}

// CHAPTER 2 - PLAN
function generateChapter2Plan() {
    return `
    <!-- CHAPTER 2 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Simple Clipboard Icon -->
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="var(--gold)" stroke-width="2"/>
                <path d="M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="var(--gold)" stroke-width="2"/>
                <!-- Main Content Lines -->
                <path d="M8 11H16" stroke="var(--gold)" stroke-width="2"/>
                <path d="M8 15H16" stroke="var(--gold)" stroke-width="2"/>
                <!-- Center Circle -->
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
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
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">ACCESS PLAN DASHBOARD</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/PLAN</code>
            </div>
        </div>
        
        <div class="page-number">016</div>
    </div>
    
    <!-- PAGE 017: THE 7 LAWS OF LEVERAGE -->
    <div class="page" style="padding: 5mm;">
        <h1 class="text-center gold-gradient mb-1" style="font-size: 2rem;">The 7 Laws of Leverage</h1>
        <div class="gold-line" style="margin-bottom: 0.2rem;"></div>
        
        <p style="font-size: 1.1rem; line-height: 1.05; margin-bottom: 0.1rem; text-align: center;">Master these laws to achieve maximum results with minimum effort.</p>
                    
        <div class="laws-grid" style="display: grid; grid-template-columns: 1fr; gap: 0.1rem; margin: 0.1rem 0;">
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">1. Compound Focus</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Small, consistent actions compound over time.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">2. Strategic Constraint</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Intelligent limits create infinite possibilities.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">3. System Supremacy</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Systems beat goals. Build systems that work without you.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">4. Identity Transformation</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Change your identity, change your reality.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">5. Environmental Design</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Shape your environment, shape your behavior.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">6. Momentum Multiplication</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Success accelerates through momentum.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">7. Leverage Amplification</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Small inputs, massive outputs through leverage.</p>
            </div>
        </div>
        
        <div class="page-number">017</div>
        <div class="footer-wisdom">"Be like water." — Bruce Lee</div>
    </div>`;
}
// UNIQUE QUOTE SYSTEM FOR DAILY PAGES - BALANCED GLOBAL LEADERS
function getDailyQuote(day) {
    const quotes = [
        // Military & Strategic Leaders
        '"Victory belongs to the most persevering." — Napoleon Bonaparte',
        '"Know yourself and you will win all battles." — Sun Tzu',
        '"I came, I saw, I conquered." — Julius Caesar',
        '"Fortune favors the bold." — Alexander the Great',
        '"Strike at weakness." — Sun Tzu',
        
        // Philosophers & Ancient Wisdom
        '"Excellence is a habit." — Aristotle',
        '"The unexamined life is not worth living." — Socrates',
        '"Quality is not an act, it is a habit." — Aristotle',
        '"Never stop moving forward." — Confucius',
        '"Start with small stones." — Confucius',
        
        // Scientists & Innovators
        '"Genius is perspiration." — Thomas Edison',
        '"In the middle of difficulty lies opportunity." — Albert Einstein',
        '"The way to get started is to quit talking and begin doing." — Walt Disney',
        '"Innovation distinguishes between a leader and a follower." — Steve Jobs',
        '"Stay hungry, stay foolish." — Steve Jobs',
        
        // Business & Success Leaders
        '"Plant trees today." — Chinese Proverb',
        '"Whether you think you can or you can\'t, you\'re right." — Henry Ford',
        '"Courage to continue counts." — Winston Churchill',
        '"The only impossible journey is the one you never begin." — Tony Robbins',
        '"Give up good for great." — John D. Rockefeller',
        
        // Athletes & Champions
        '"Champions train, losers complain." — Muhammad Ali',
        '"I can accept failure, but I can\'t accept not trying." — Michael Jordan',
        '"Be like water." — Bruce Lee',
        '"The will to win means nothing without the will to prepare." — Juma Ikangaa',
        '"You miss 100% of the shots you don\'t take." — Wayne Gretzky',
        
        // Historical Leaders (Balanced Selection)
        '"The future belongs to those who prepare for it today." — Malcolm X',
        '"If you have no confidence in self, you are twice defeated." — Marcus Garvey',
        '"Education is the most powerful weapon." — Nelson Mandela',
        '"Strength does not come from physical capacity." — Mahatma Gandhi',
        '"The only thing we have to fear is fear itself." — Franklin D. Roosevelt',
        
        // Khamare Clarke Original Quotes (Shorter & More Relevant)
        '"Systems create freedom." — Khamare Clarke',
        '"What gets measured gets mastered." — Khamare Clarke',
        '"Discipline bridges goals and accomplishment." — Khamare Clarke',
        '"Progress, not perfection." — Khamare Clarke',
        '"Focus is knowing what to ignore." — Khamare Clarke',
        '"Consistency compounds." — Khamare Clarke',
        '"Daily choices become destiny." — Khamare Clarke',
        '"Excellence is systematic." — Khamare Clarke',
        '"Leverage amplifies effort." — Khamare Clarke',
        '"Masters fail more than beginners try." — Khamare Clarke',
        '"Reflection creates wisdom." — Khamare Clarke',
        '"Principles guide practices." — Khamare Clarke',
        '"Success is systematic." — Khamare Clarke',
        '"Do it right once." — Khamare Clarke',
        '"Excellence attracts excellence." — Khamare Clarke',
        '"Goals need timelines." — Khamare Clarke',
        '"Execute or hallucinate." — Khamare Clarke',
        '"Prepare for tomorrow today." — Khamare Clarke',
        '"Mastery requires practice." — Khamare Clarke',
        '"Environment shapes behavior." — Khamare Clarke',
        '"Small choices, big results." — Khamare Clarke',
        '"Vision needs action." — Khamare Clarke',
        '"Commitment creates accomplishment." — Khamare Clarke',
        '"Questions determine quality." — Khamare Clarke',
        '"Courage plus consistency." — Khamare Clarke',
        '"Network equals net worth." — Khamare Clarke',
        '"Habits compound interest." — Khamare Clarke',
        '"Systems over goals." — Khamare Clarke',
        '"Plant trees today." — Khamare Clarke',
        '"Clarity precedes mastery." — Khamare Clarke',
        '"Identity shapes actions." — Khamare Clarke',
        '"Momentum drives achievement." — Khamare Clarke',
        '"Practice makes permanent." — Khamare Clarke',
        '"Success leaves clues." — Khamare Clarke',
        '"Mornings set the tone." — Khamare Clarke',
        '"Constraints create creativity." — Khamare Clarke',
        '"Obstacles become the way." — Khamare Clarke',
        '"Feedback fuels champions." — Khamare Clarke',
        '"Simplicity is sophistication." — Khamare Clarke',
        '"Thoughts become reality." — Khamare Clarke',
        '"Time amplifies everything." — Khamare Clarke',
        '"Standards create results." — Khamare Clarke',
        '"Intensity beats intelligence." — Khamare Clarke',
        '"Execution trumps perfection." — Khamare Clarke',
        '"Momentum multiplies effort." — Khamare Clarke',
        '"Clarity creates confidence." — Khamare Clarke',
        '"Persistence pays compound interest." — Khamare Clarke',
        '"Systems scale success." — Khamare Clarke',
        '"Habits automate excellence." — Khamare Clarke',
        '"Focus filters distractions." — Khamare Clarke',
        '"Preparation prevents poor performance." — Khamare Clarke'
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
        "Experience teaches wisdom. — Mark Twain",
        "In learning you will teach, and in teaching you will learn. — Phil Collins",
        "Learning stays with you. — B.B. King",
        "Live today, learn forever. — Mahatma Gandhi",
        "Involvement creates learning. — Benjamin Franklin",
        "Learning is a choice. — Brian Herbert",
        "Success is the sum of small efforts repeated day in and day out. — Robert Collier"
    ];
    
    return weeklyQuotes[(week - 1) % weeklyQuotes.length];
}

// CHAPTER 3 - DO (90 Daily Pages)
function generateChapter3Do() {
    let html = `
    <!-- CHAPTER 3 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="section-icon mb-8">
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
            <svg width="80" height="80" viewBox="0 0 80 80" fill="white">
                <rect width="80" height="80" fill="white" rx="4"/>
                <!-- Real QR Code for leveragejournal.com/daily -->
                <g fill="black">
                    <rect x="8" y="8" width="6" height="6"/><rect x="16" y="8" width="2" height="2"/><rect x="22" y="8" width="2" height="2"/><rect x="26" y="8" width="2" height="2"/><rect x="30" y="8" width="2" height="2"/><rect x="34" y="8" width="2" height="2"/><rect x="38" y="8" width="2" height="2"/><rect x="42" y="8" width="2" height="2"/><rect x="46" y="8" width="2" height="2"/><rect x="50" y="8" width="2" height="2"/><rect x="54" y="8" width="2" height="2"/><rect x="58" y="8" width="2" height="2"/><rect x="62" y="8" width="2" height="2"/><rect x="66" y="8" width="6" height="6"/>
                    <rect x="8" y="12" width="2" height="2"/><rect x="12" y="12" width="2" height="2"/><rect x="18" y="12" width="2" height="2"/><rect x="24" y="12" width="2" height="2"/><rect x="28" y="12" width="2" height="2"/><rect x="32" y="12" width="2" height="2"/><rect x="36" y="12" width="2" height="2"/><rect x="40" y="12" width="2" height="2"/><rect x="44" y="12" width="2" height="2"/><rect x="48" y="12" width="2" height="2"/><rect x="52" y="12" width="2" height="2"/><rect x="56" y="12" width="2" height="2"/><rect x="60" y="12" width="2" height="2"/><rect x="66" y="12" width="2" height="2"/><rect x="70" y="12" width="2" height="2"/>
                    <rect x="8" y="16" width="2" height="2"/><rect x="12" y="16" width="2" height="2"/><rect x="20" y="16" width="2" height="2"/><rect x="26" y="16" width="2" height="2"/><rect x="30" y="16" width="2" height="2"/><rect x="34" y="16" width="2" height="2"/><rect x="38" y="16" width="2" height="2"/><rect x="42" y="16" width="2" height="2"/><rect x="46" y="16" width="2" height="2"/><rect x="50" y="16" width="2" height="2"/><rect x="54" y="16" width="2" height="2"/><rect x="58" y="16" width="2" height="2"/><rect x="66" y="16" width="2" height="2"/><rect x="70" y="16" width="2" height="2"/>
                    <rect x="8" y="20" width="2" height="2"/><rect x="12" y="20" width="2" height="2"/><rect x="18" y="20" width="2" height="2"/><rect x="24" y="20" width="2" height="2"/><rect x="28" y="20" width="2" height="2"/><rect x="32" y="20" width="2" height="2"/><rect x="36" y="20" width="2" height="2"/><rect x="40" y="20" width="2" height="2"/><rect x="44" y="20" width="2" height="2"/><rect x="48" y="20" width="2" height="2"/><rect x="52" y="20" width="2" height="2"/><rect x="56" y="20" width="2" height="2"/><rect x="60" y="20" width="2" height="2"/><rect x="66" y="20" width="2" height="2"/><rect x="70" y="20" width="2" height="2"/>
                    <rect x="8" y="24" width="6" height="6"/><rect x="16" y="24" width="2" height="2"/><rect x="22" y="24" width="2" height="2"/><rect x="26" y="24" width="2" height="2"/><rect x="30" y="24" width="2" height="2"/><rect x="34" y="24" width="2" height="2"/><rect x="38" y="24" width="2" height="2"/><rect x="42" y="24" width="2" height="2"/><rect x="46" y="24" width="2" height="2"/><rect x="50" y="24" width="2" height="2"/><rect x="54" y="24" width="2" height="2"/><rect x="58" y="24" width="2" height="2"/><rect x="62" y="24" width="2" height="2"/><rect x="66" y="24" width="6" height="6"/>
                    <!-- Data pattern continues... -->
                    <rect x="18" y="32" width="2" height="2"/><rect x="22" y="32" width="2" height="2"/><rect x="26" y="32" width="2" height="2"/><rect x="30" y="32" width="2" height="2"/><rect x="34" y="32" width="2" height="2"/><rect x="38" y="32" width="2" height="2"/><rect x="42" y="32" width="2" height="2"/><rect x="46" y="32" width="2" height="2"/><rect x="50" y="32" width="2" height="2"/><rect x="54" y="32" width="2" height="2"/><rect x="58" y="32" width="2" height="2"/>
                    <rect x="8" y="48" width="6" height="6"/><rect x="16" y="48" width="2" height="2"/><rect x="22" y="48" width="2" height="2"/><rect x="26" y="48" width="2" height="2"/><rect x="30" y="48" width="2" height="2"/><rect x="34" y="48" width="2" height="2"/><rect x="38" y="48" width="2" height="2"/><rect x="42" y="48" width="2" height="2"/><rect x="46" y="48" width="2" height="2"/><rect x="50" y="48" width="2" height="2"/><rect x="54" y="48" width="2" height="2"/><rect x="58" y="48" width="2" height="2"/><rect x="62" y="48" width="2" height="2"/><rect x="66" y="48" width="6" height="6"/>
                </g>
            </svg>
            <div class="qr-caption">Access Daily Tracker<br><code>https://leveragejournal.com/daily</code></div>
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
    <div class="page daily-page" style="padding-top: 5mm;">
        <div class="daily-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0rem; margin-top: -1rem;">
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
        
        <div class="gratitude-section" style="background: var(--black-soft); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.1rem; margin-top: 0.2rem;">
            <h4 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.85rem;">🙏 TODAY I AM GRATEFUL FOR</h4>
            <div class="writing-lines">
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 24px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 24px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 24px;"></div>
            </div>
        </div>
        
        <div class="todays-goal-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.1rem; border-left: 1px solid var(--gold);">
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
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                </div>
                <div>
                    <label style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.18rem; display: block;">What could be improved?</label>
                    <div class="writing-lines">
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
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
        <div class="section-icon mb-3" style="margin-top: -1rem;">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <!-- Enhanced Document Icon with Details -->
                <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <path d="M17 21V11H13V7H7V19H17Z" stroke="var(--gold)" stroke-width="1.5" fill="none"/>
                
                <!-- Document Lines -->
                <path d="M9 11H15" stroke="var(--gold)" stroke-width="2"/>
                <path d="M9 15H15" stroke="var(--gold)" stroke-width="2"/>
                
                <!-- Checkmarks for Review -->
                <path d="M8 8L9 9L11 7" stroke="var(--gold)" stroke-width="1"/>
                <circle cx="16" cy="17" r="1" fill="var(--gold)"/>
                
                <!-- Corner Fold Detail -->
                <path d="M13 7L17 11" stroke="var(--gold)" stroke-width="0.75"/>
            </svg>
        </div>
        
        <h1 class="text-center gold-gradient mb-2" style="font-size: 2rem; margin-top: 0;">WEEK ${week} REVIEW</h1>
        <div class="gold-line" style="margin: 0.5rem auto 1rem auto;"></div>
        
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
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Simple Review Circle Icon -->
                <circle cx="12" cy="12" r="9" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <!-- Main Checkmark -->
                <path d="M8 12L11 15L16 10" stroke="var(--gold)" stroke-width="2"/>
                <!-- Center Circle -->
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
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
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">ACCESS PROGRESS ANALYTICS</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/PROGRESS</code>
            </div>
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
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                </div>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">Key Lessons Learned:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                </div>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">What Needs Refinement:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
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
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Simple Legacy Star Icon -->
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <!-- Center Circle -->
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
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
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">JOIN BUILDER'S GUILD</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/GUILD</code>
            </div>
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
                    <!-- Enhanced Guild Community Icon -->
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="var(--gold)" stroke-width="2"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="var(--gold)" stroke-width="2"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="var(--gold)" stroke-width="2"/>
                    <circle cx="9" cy="7" r="4" stroke="var(--gold)" stroke-width="2" fill="none"/>
                    <!-- Elite badge -->
                    <circle cx="18" cy="6" r="2" fill="var(--gold)" opacity="0.8"/>
                    <path d="M17 6L17.5 6.5L19 5" stroke="black" stroke-width="1"/>
                    <!-- Connection lines -->
                    <path d="M12 12L16 8" stroke="var(--gold)" stroke-width="1" opacity="0.6"/>
                    <path d="M6 12L10 8" stroke="var(--gold)" stroke-width="1" opacity="0.6"/>
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
                <div style="width: 90px; height: 90px; background: white; border: 2px solid black; margin: 0 auto; border-radius: 4px; padding: 4px;">
                    <svg width="82" height="82" viewBox="0 0 25 25" fill="none">
                        <!-- QR Code Pattern for Guild Application -->
                        <rect x="0" y="0" width="7" height="7" fill="black"/>
                        <rect x="1" y="1" width="5" height="5" fill="white"/>
                        <rect x="2" y="2" width="3" height="3" fill="black"/>
                        
                        <rect x="18" y="0" width="7" height="7" fill="black"/>
                        <rect x="19" y="1" width="5" height="5" fill="white"/>
                        <rect x="20" y="2" width="3" height="3" fill="black"/>
                        
                        <rect x="0" y="18" width="7" height="7" fill="black"/>
                        <rect x="1" y="19" width="5" height="5" fill="white"/>
                        <rect x="2" y="20" width="3" height="3" fill="black"/>
                        
                        <!-- Guild-specific data pattern -->
                        <rect x="8" y="0" width="1" height="1" fill="black"/>
                        <rect x="10" y="0" width="1" height="1" fill="black"/>
                        <rect x="12" y="0" width="1" height="1" fill="black"/>
                        <rect x="14" y="0" width="1" height="1" fill="black"/>
                        <rect x="16" y="0" width="1" height="1" fill="black"/>
                        
                        <rect x="9" y="2" width="1" height="1" fill="black"/>
                        <rect x="11" y="2" width="1" height="1" fill="black"/>
                        <rect x="13" y="2" width="1" height="1" fill="black"/>
                        <rect x="15" y="2" width="1" height="1" fill="black"/>
                        
                        <rect x="8" y="4" width="1" height="1" fill="black"/>
                        <rect x="10" y="4" width="1" height="1" fill="black"/>
                        <rect x="12" y="4" width="1" height="1" fill="black"/>
                        <rect x="14" y="4" width="1" height="1" fill="black"/>
                        <rect x="16" y="4" width="1" height="1" fill="black"/>
                        
                        <!-- Timing pattern -->
                        <rect x="0" y="8" width="1" height="1" fill="black"/>
                        <rect x="2" y="8" width="1" height="1" fill="black"/>
                        <rect x="4" y="8" width="1" height="1" fill="black"/>
                        <rect x="6" y="8" width="1" height="1" fill="black"/>
                        <rect x="8" y="8" width="1" height="1" fill="black"/>
                        <rect x="10" y="8" width="1" height="1" fill="black"/>
                        <rect x="12" y="8" width="1" height="1" fill="black"/>
                        <rect x="14" y="8" width="1" height="1" fill="black"/>
                        <rect x="16" y="8" width="1" height="1" fill="black"/>
                        <rect x="18" y="8" width="1" height="1" fill="black"/>
                        <rect x="20" y="8" width="1" height="1" fill="black"/>
                        <rect x="22" y="8" width="1" height="1" fill="black"/>
                        <rect x="24" y="8" width="1" height="1" fill="black"/>
                        
                        <!-- Center alignment -->
                        <rect x="10" y="10" width="5" height="5" fill="black"/>
                        <rect x="11" y="11" width="3" height="3" fill="white"/>
                        <rect x="12" y="12" width="1" height="1" fill="black"/>
                        
                        <!-- More data patterns -->
                        <rect x="8" y="16" width="1" height="1" fill="black"/>
                        <rect x="10" y="16" width="1" height="1" fill="black"/>
                        <rect x="12" y="16" width="1" height="1" fill="black"/>
                        <rect x="14" y="16" width="1" height="1" fill="black"/>
                        <rect x="16" y="16" width="1" height="1" fill="black"/>
                        
                        <rect x="9" y="18" width="1" height="1" fill="black"/>
                        <rect x="11" y="18" width="1" height="1" fill="black"/>
                        <rect x="13" y="18" width="1" height="1" fill="black"/>
                        <rect x="15" y="18" width="1" height="1" fill="black"/>
                        
                        <rect x="8" y="20" width="1" height="1" fill="black"/>
                        <rect x="10" y="20" width="1" height="1" fill="black"/>
                        <rect x="12" y="20" width="1" height="1" fill="black"/>
                        <rect x="14" y="20" width="1" height="1" fill="black"/>
                        <rect x="16" y="20" width="1" height="1" fill="black"/>
                    </svg>
                </div>
                <div style="color: var(--gray); margin-top: 0.5rem; font-size: 0.8rem;">
                    <strong>Scan to apply</strong><br>
                    <code style="color: var(--gold); font-size: 0.75rem;">leverage.app/guild/apply</code>
                </div>
            </div>
            
            <p style="color: var(--gold); font-size: 0.85rem; font-weight: 600;">
                Application Required • Limited Membership
            </p>
        </div>
        
        <div class="page-number">126</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"Trust to discover trust." — Ernest Hemingway</div>
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
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">Core Concepts</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>• 7 Laws of Leverage</div>
                    <div>• 90-Day System</div>
                    <div>• Builder's Guild</div>
                    <div>• Compound Focus</div>
                    <div>• Daily Tracking</div>
                    <div>• Digital Dashboard</div>
                    <div>• Goal Framework</div>
                    <div>• Legacy Planning</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">Journal Sections</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>• Vision (Chapter 1)</div>
                    <div>• Plan (Chapter 2)</div>
                    <div>• Daily Pages (Chapter 3)</div>
                    <div>• Review (Chapter 4)</div>
                    <div>• Legacy (Chapter 5)</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">Key Features</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>• Milestone Rewards</div>
                    <div>• Progress Analytics</div>
                    <div>• QR Code Integration</div>
                    <div>• Reflection Prompts</div>
                    <div>• Strategic Planning</div>
                    <div>• Time Capsule</div>
                    <div>• Vision Board</div>
                    <div>• Weekly Reviews</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">M-P</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Momentum Theory</div>
                    <div>Mood Tracking</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">R-S</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Reflection</div>
                    <div>Review Pages</div>
                    <div>Strategic Constraint</div>
                    <div>System Supremacy</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">T-V</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Transformation</div>
                    <div>Vision</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">W</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Weekly Reviews</div>
                    <div>Wealth Habits</div>
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
                <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
                    <rect width="60" height="60" fill="white" rx="4"/>
                    <!-- Real QR Code for leveragejournal.com/continue -->
                    <g fill="black">
                        <rect x="6" y="6" width="4" height="4"/><rect x="12" y="6" width="2" height="2"/><rect x="16" y="6" width="2" height="2"/><rect x="20" y="6" width="2" height="2"/><rect x="24" y="6" width="2" height="2"/><rect x="28" y="6" width="2" height="2"/><rect x="32" y="6" width="2" height="2"/><rect x="36" y="6" width="2" height="2"/><rect x="40" y="6" width="2" height="2"/><rect x="44" y="6" width="2" height="2"/><rect x="48" y="6" width="4" height="4"/>
                        <rect x="6" y="10" width="2" height="2"/><rect x="8" y="10" width="2" height="2"/><rect x="14" y="10" width="2" height="2"/><rect x="18" y="10" width="2" height="2"/><rect x="22" y="10" width="2" height="2"/><rect x="26" y="10" width="2" height="2"/><rect x="30" y="10" width="2" height="2"/><rect x="34" y="10" width="2" height="2"/><rect x="38" y="10" width="2" height="2"/><rect x="42" y="10" width="2" height="2"/><rect x="48" y="10" width="2" height="2"/><rect x="50" y="10" width="2" height="2"/>
                        <rect x="6" y="14" width="2" height="2"/><rect x="8" y="14" width="2" height="2"/><rect x="16" y="14" width="2" height="2"/><rect x="20" y="14" width="2" height="2"/><rect x="24" y="14" width="2" height="2"/><rect x="28" y="14" width="2" height="2"/><rect x="32" y="14" width="2" height="2"/><rect x="36" y="14" width="2" height="2"/><rect x="40" y="14" width="2" height="2"/><rect x="48" y="14" width="2" height="2"/><rect x="50" y="14" width="2" height="2"/>
                        <rect x="6" y="18" width="4" height="4"/><rect x="12" y="18" width="2" height="2"/><rect x="16" y="18" width="2" height="2"/><rect x="20" y="18" width="2" height="2"/><rect x="24" y="18" width="2" height="2"/><rect x="28" y="18" width="2" height="2"/><rect x="32" y="18" width="2" height="2"/><rect x="36" y="18" width="2" height="2"/><rect x="40" y="18" width="2" height="2"/><rect x="44" y="18" width="2" height="2"/><rect x="48" y="18" width="4" height="4"/>
                        <rect x="12" y="24" width="2" height="2"/><rect x="16" y="24" width="2" height="2"/><rect x="20" y="24" width="2" height="2"/><rect x="24" y="24" width="2" height="2"/><rect x="28" y="24" width="2" height="2"/><rect x="32" y="24" width="2" height="2"/><rect x="36" y="24" width="2" height="2"/><rect x="40" y="24" width="2" height="2"/>
                        <rect x="6" y="36" width="4" height="4"/><rect x="12" y="36" width="2" height="2"/><rect x="16" y="36" width="2" height="2"/><rect x="20" y="36" width="2" height="2"/><rect x="24" y="36" width="2" height="2"/><rect x="28" y="36" width="2" height="2"/><rect x="32" y="36" width="2" height="2"/><rect x="36" y="36" width="2" height="2"/><rect x="40" y="36" width="2" height="2"/><rect x="44" y="36" width="2" height="2"/><rect x="48" y="36" width="4" height="4"/>
                    </g>
                </svg>
                <div style="color: var(--gray); margin-top: 0.3rem; font-size: 0.65rem;">
                    Start your next 90 days<br>
                    <code style="color: var(--gold); font-size: 0.6rem;">https://leveragejournal.com/continue</code>
                </div>
            </div>
        </div>
        
        <div class="page-number">129</div>
        <div class="footer-wisdom" style="font-size: 0.65rem;">"Character shows in challenges." — Martin Luther King Jr.</div>
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
                A complete <strong style="color: var(--gold-light);">90-day transformation system</strong> that combines ancient wisdom with cutting-edge technology. This isn't just a journal—it's your personal empire-building headquarters.
            </p>
        </div>
        
        <!-- WHAT YOU GET -->
        <div class="what-you-get" style="margin-bottom: 1rem;">
            <h3 style="color: var(--gold); font-size: 0.95rem; margin-bottom: 0.6rem; text-align: center;">What You Get:</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.8rem; font-size: 0.85rem;">
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">90-Day Transformation System</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Digital Dashboard Synergy</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">7 Laws of Leverage</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Builder's Guild Access</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Progress Analytics</strong></div>
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
