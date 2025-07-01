package com.servy.user.repository

import com.servy.user.domain.Survey
import org.springframework.data.jpa.repository.JpaRepository

interface SurveyRepository : JpaRepository<Survey, Int> {
}