package com.survey.user.repository

import com.survey.user.domain.Option
import org.springframework.data.jpa.repository.JpaRepository

interface OptionRepository : JpaRepository<Option, Int> {
}